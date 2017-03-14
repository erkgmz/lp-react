import fs from 'fs';
import cheerio from 'cheerio';
import color from 'colors';

/*eslint-disable no-console */

fs.readFile('src/index.ejs', 'utf-8', (err, markup) => {
  if(err) {
    return console.log(err);
  }

  const $ = cheerio.load(markup);

  // $('head').prepend(`<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>`);

  // $.html(),
  fs.writeFile('dist/index.html', $.html(), 'utf-8', err => {
    if(err) {
      return console.log(err);
    }
    console.log('index.html written to /dist'.green);
  });
});
