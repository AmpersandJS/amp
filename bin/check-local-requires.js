/*global process*/
/*
Validates that there are no local requires.
Exits code 1 if there are. Meant to be used
for prepublish.
*/

var localRegex = /require\(\'\.\.\//g;
var packages = require('../lib/get-packages')();

packages.forEach(function (pack) {
    if (localRegex.test(pack.code) || localRegex.test(pack.test)) {
        process.exit(1);
    }
});
