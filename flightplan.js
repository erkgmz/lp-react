/* eslint-disable */
var plan = require('flightplan');

var appName = 'app';
var username = 'erik';
var startFile = 'dist/';

var tmpDir = appName+'-' + new Date().getTime();

// configuration
plan.target('staging', [
  {
    host: '104.131.128.185',
    username: username,
    agent: process.env.SSH_AUTH_SOCK
  }
]);

plan.target('production', [
  {
    host: '104.131.128.185',
    username: username,
    agent: process.env.SSH_AUTH_SOCK
  },
//add in another server if you have more than one
// {
//   host: '104.131.93.216',
//   username: username,
//   agent: process.env.SSH_AUTH_SOCK
// }
]);

// run commands on localhost
plan.local(function(local) {
  // uncomment these if you need to run a build on your machine first
  // local.log('Run build');
  // local.exec('npm run build');
  // ADD COMMIT EVERYTHING FIRST SO DIST FILE WILL BE RSYNCED

  local.log('Copy files to remote hosts');
  var files = local.exec('git ls-files', {silent: true});
  // rsync files to all the destination's hosts
  console.log(files)
  local.transfer(files, '/tmp/' + tmpDir);
});

// run commands on remote hosts (destinations)
plan.remote(function(remote) {
  remote.log('Move folder to root');
  remote.sudo('cp -R /tmp/' + tmpDir + ' ~', {user: username});
  remote.rm('-rf /tmp/' + tmpDir);

  remote.log('Install dependencies');
  remote.sudo('npm --production --prefix ~/' + tmpDir + ' install ~/' + tmpDir, {user: username});

  remote.log('Reload application');
  // SYMLINK?
  remote.sudo('ln -snf ~/' + tmpDir + ' ~/'+appName, {user: username});
  // remote.exec('forever start ~/'+appName);
  // remote.exec('cd ' + tmpDir + ' && forever start -c "npm start" ./');

  // https://github.com/foreverjs/forever/issues/540
  remote.exec('forever stop ~/'+tmpDir, {failsafe: true});
  // remote.exec('cd ~/' + tmpDir + ' && npm start');
  // remote.exec('forever start --minUptime 20000 --spinSleepTime 1000 -c "node" ~/' + tmpDir + '/tools/distServer.js');
  remote.exec('cd ~/' + tmpDir + ' && forever start --minUptime 20000 --spinSleepTime 1000 -c "npm start" ./');
  // remote.exec('npm start ' + tmpDir);

});
