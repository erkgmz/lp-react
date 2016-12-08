import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/*eslint-disable no-console*/

const port = 8080;

const app = express();
const bodyParser = require('body-parser');

const contactRoute = require('./routes/contactRoute.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(compression());
app.use(express.static('dist'));

app.use('/contact', contactRoute);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, err => {
  if(err) {
    return console.log(err);
  } else {
    console.log(`App is now running on ${port}`);
    open(`http://localhost:${port}`);
  }
});
