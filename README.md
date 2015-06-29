# serve
test server for javascript apps mainly for angular / yo / ngbp

## Synopsis
This is a small tool to run very basic static file server to test webapps.

## Installation

	npm install serve --save-dev

then edit package.json script. e.g.

	scripts: {
		serve: "node ./node_modules/serve/bin/start --home yourWwwDir --port 3000
	}

	npm run serve

alternativly you can run init script in `/bin/init` which will create `scripts` and public direcotries, and creates start script
in your main project folder and adds this line into the package.json scripts

	serve: "node ./scripts/start --home public"

serve will use default port 3001, you can change any of that.

## Use
### npm
add run srcript into scripts

    scripts: {
      start: "node ./bin/start --home yourWwwDirectory --port 3000"
	  //or
      serve: "node ./bin/start --home yourWwwDirectory --port 3000"
    }

the above will  setup static http server running on port 3000 (default is 3001) and serving files from ./yourWwwDirectory
relative to your npm `package.json` file

	npm start

or

	npm run serve


## TODO

### wrapping script
make the script which would would allow to run any angular app on this simple server without using gulp or grunt solutions
or without running apache localhost to server static files.

### integration script
integration into grunt and gulp would be good

### write some tests

### documentation - youDoc ?
