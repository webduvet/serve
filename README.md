# serve
test server for javascript apps mainly for angular / yo / ngbp

## Synopsis
This is a small tool to run very basic static file server to test webapps.

## Installation

## Use
### npm
add run srcript into scripts

    scripts: {
      start: "node ./bin/start --home yourWwwDirectory --port 3000"
    }

the above will  setup static http server running on port 3000 (default is 3001) and serving files from ./yourWwwDirectory
relative to your npm `package.json` file
