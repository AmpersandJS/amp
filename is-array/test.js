var test = require('tape');
var pack = require('./package.json');
var isArray = require('./' + pack.main);


test('is-array', function (t) {
    t.ok(!isArray(undefined), 'undefined vars are not arrays');
    t.ok(!isArray(arguments), 'the arguments object is not an array');
    t.ok(isArray([1, 2, 3]), 'but arrays are');
    t.end();
});
