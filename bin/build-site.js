var packages = require('../lib/get-packages')();
var renderJade = require('./render-jade');

renderJade(__dirname + '/../documentation/index.jade', {packages: packages}, __dirname + '/../index.html');
