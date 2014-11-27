var packages = require('../lib/get-packages')();
var renderJade = require('./render-jade');

packages = packages.filter(function (pack) {
    return !pack.internal;
}); 

renderJade(__dirname + '/../documentation/index.jade', {packages: packages}, __dirname + '/../index.html');
