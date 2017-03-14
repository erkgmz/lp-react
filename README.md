## Getting started 

To run app in development mode, go to your terminal and run `npm start -s` and navigate to `localhost:3000`. 

The `-s` flag reduces "noise" while starting up and is completely optional. 

To build app in production, open your terminal and run `npm run build -s`.

To run app in production, open your terminal and run `npm productionServer -s` then navigate to `localhost:8080`.

## List of technologies used for development

### Front-end
- React
- React Dom
- React Router
- Normalize CSS
- SASS
- Flexbox (Autoprefixed with PostCSS and Webpack)
- CSS Modules (Webpack feature)
- Mobile first / Responsive
- Ajax
- Modern JavaScript (ES6+)

### Back-end
- Node.js @5.7.1
- Express
	- Express Router
- NPM scripts (including pre/post hooks)

### Transpiler - Babel

#### List of plugins
- babel-cli
- babel-core
- babel-loader
- babel-plugin-react-display-name
- babel-preset-es2015
- babel-preset-react
- babel-preset-react-hmre
- babel-register

### Module Bundler - Webpack 1.X

#### List of loaders
- style-loader
- url-loader
- resolve-url-loader
- sass-loader
- file-loader
- html-loader
- postcss-loader
- css-loader
- extract-text-webpack-plugin
- webpack-dev-middleware
- webpack-hot-middleware

### Emails
- Sendgrid (Node.js)

### Linter - Eslint

#### List of plugins
- eslint-plugin-import
- eslint-plugin-react
- eslint-watch

### Deployment
- Flightplan
- Digital Ocean (for Node.js support)

***This project will remain a continous work in progress. Report bugs (or ideas) to e@erikgomez.co.***
