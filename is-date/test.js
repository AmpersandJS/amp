var test = require('tape');
var pack = require('./package.json');
var isDate = require('./' + pack.main);


test('isDate', function (t) {
    t.ok(!isDate(100), 'numbers are not dates');
    t.ok(!isDate({}), 'objects are not dates');
    t.ok(isDate(new Date()), 'but dates are');
    t.end();
});
