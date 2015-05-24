console.log('start', process.argv);
var
	args = process.argv.length > 2 ? process.argv.slice(-2) : [,],
	port = /^\d{4}$/.test(args[0]) ? args[0] : 3001,
	path = (typeof args[1]!== 'undefined' && /^(((\/)|(\.)\/|(\.\.)\/))*(((\w+)|(\.\.)|(\.))*\/)*(\w*)$/.test(args[1])) ? args[1] : './';

// treatment for path in current dir with prefix ./ and trailing / if missing
if (/^\w+/.test(path) ) {
	path = './'+path;
}
if (/\w+$/.test(path) ) {
	path = path + '/';
}

console.log(args);
console.log(port, path);

