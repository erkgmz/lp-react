### Run app in dev mode
	npm run dev

### Run app in production mode
	npm run build

### Heroku

**No longer using Heroku for deployment**

These commands are only here for reference, there's no need to run them while working on this project. Read about Heroku and npm scripts `npm start` & `npm run postinstall` [here](https://devcenter.heroku.com/articles/nodejs-support#build-behavior) or watch [this helpful video on youtube](https://www.youtube.com/watch?v=Ru3Rj_hM8bo&t=1060s) about this topic.

	npm run postinstall - initial production build
	npm start - starts distServer


Environment variables on remote server need to be updated manually. For security, we can only ever add our git-ls files
to the server, so env vars cannot be sent over ssh.
