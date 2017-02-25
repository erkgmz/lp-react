/* eslint-disable */
var plan = require('flightplan');

var appName = 'app';
var username = 'erik';
var startFile = 'dist/';

var tmpDir = appName+'-' + new Date().getTime();

plan.target('production', [
  {
    host: '104.131.128.185',
    username: username,
    privateKey: '/Users/erikgomez/.ssh/id_rsa',
    agent: process.env.SSH_AUTH_SOCK
  },
]);

// run commands on localhost
plan.local(function(local) {
  local.log('Copy files to remote hosts');
  var files = local.exec('git ls-files && ls .env', {silent: true});
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
  remote.sudo('ln -snf ~/' + tmpDir + ' ~/'+appName, {user: username});

  remote.exec('forever stopall', {failsafe: true});
  remote.exec('cd ~/' + appName + ' && forever start --minUptime 20000 --spinSleepTime 1000 -c "npm run productionServer" ./');
  // https://github.com/foreverjs/forever/issues/540
});
