// runs all the individual tests
var fs = require('fs');
var test = require('tape');
var getPackages = require('../lib/get-packages');


getPackages().forEach(function (pack) {
    if (pack.test.split('\n').length < 10) {
        test(pack.name, function (t) {
            t.fail('there are no tests for ' + pack.name);
            t.end();
        });
    } else {
        require(pack.folder + '/test');
    }
    if (!pack.doc) {
        test(pack.name + ' doc integrity test', function (t) {
            t.fail('there are no docs for' + pack.name);
            t.end();
        });
    }
});
