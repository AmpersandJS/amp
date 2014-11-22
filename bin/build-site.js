var packages = require('../lib/get-packages')();
var renderJade = require('./render-jade');

// build our readmes first
require('./build-readmes');

//console.log(html);

renderJade(__dirname + '/../documentation/index.jade', {packages: packages}, __dirname + '/../index.html');
