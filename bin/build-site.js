var packages = require('../lib/get-packages')();
var packageNames = require('../lib/get-names')();
var renderJade = require('./render-jade');

var context = {
    packages: packages,
    numberOfModules: packageNames.length
};

renderJade(__dirname + '/../documentation/index.jade', context, __dirname + '/../index.html');
