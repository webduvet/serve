var 
	fs = require('fs'),
	path = require('path'),
	mime = require('mime'),
	cache = {},
	clc = require('cli-color'),
	http = require('http');

/**
 * plain 404 response
 */
function send404(res){
	res.writeHead(404, {'Content-Type':'text/plain'});
	res.write('Error 404: resource not found.');
	res.end();
}

/**
 * sending file response
 */
function sendFile(res, filePath, fileContents){
	res.writeHead(200, {"Content-Type":mime.lookup(path.basename(filePath))});
	res.end(fileContents);
}

/**
 * serve static content
 * using cache if possible
 */
function serveStatic(res, cache, absPath) {
	if (cache[absPath]) {
		sendFile(res, absPath, cache[absPath]);
	} else {
		fs.exists(absPath, function(exists) {
			if (exists) {
				fs.readFile(absPath, function(err, data){
					if(err) {
						send404(res);
					} else {
						cache[absPath] = data;
						sendFile(res, absPath, data);
					}
				});
			} else {
				send404(res);
			}
		});
	}
}



var Home = module.exports = function(spec){
	var path = spec.path,
		port = spec.port,
		filePath = '';
	// create server object
	var server = http.createServer(function(req, res){
		var filePath = false;

		if(req.url === '/') {
			filePath = path + 'index.html';
			//filePath = 'public/index.html';
		} else if ( /^\/\w+/.test(req.url) ){
			filePath = path + req.url;
			//filePath = req.url.split('/');
		} else {
			send404(res);
		}
		serveStatic(res, cache, filePath);
	});
	return {
		run: function(){
			server.listen(port, function(){
				console.log(clc.green("server listening on port: "+port));
				console.log(clc.cyan("home path is set to:  "+path));
			});
		},
		stop: function(){
		},
		port: function(port){
		},
		path: function(path){
		}
	}
};

