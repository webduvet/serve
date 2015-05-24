
var Home = require('../lib/serve.js');

var 
	argv = process.argv,
	portIndex = argv.indexOf('--port'),
	pathIndex = argv.indexOf('--home'),
	port = 3001,
	path = './'
	;

if (portIndex >=0 ) {
	port = /^\d{4}$/.test(argv[portIndex + 1]) ? argv[portIndex + 1] : port;
}

if (pathIndex >= 0) {
	path = /^(((\/)|(\.)\/|(\.\.)\/))*(((\w+)|(\.\.)|(\.))*\/)*(\w*)$/.test(argv[pathIndex + 1]) ? argv[pathIndex + 1] : path;
}


// treatment for path in current dir with prefix ./ and trailing / if missing
if (/^\w+/.test(path) ) {
	path = './'+path;
}
if (/\w+$/.test(path) ) {
	path = path + '/';
}

var home = new Home({port, path});

home.run();
