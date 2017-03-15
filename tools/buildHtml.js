import fs from 'fs';
import cheerio from 'cheerio';
import color from 'colors';

/*eslint-disable no-console */

fs.readFile('src/index.ejs', 'utf-8', (err, markup) => {
  if(err) {
    return console.log(err);
  }

  const $ = cheerio.load(markup);

  fs.writeFile('dist/static/index.html', $.html(), 'utf-8', err => {
    if(err) {
      return console.log(err);
    }
    console.log('index.html written to /dist/static/'.green);
  });
});
