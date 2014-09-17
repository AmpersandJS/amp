var fs = require('fs');
var getPackages = require('../lib/get-packages');

// build our readmes first
require('./build-readmes');

var buff = [];

getPackages().forEach(function (pack) {
    buff.push(pack.readme);
});

fs.writeFileSync(__dirname + '/../docs.md', buff.join('\n'));
console.log('\n\nwrote file: docs.md');
