var test = require('tape');
var isArray = require('./is-array');


test('amp-is-array', function (t) {
    t.ok(!isArray(undefined), 'undefined vars are not arrays');
    t.ok(!isArray(arguments), 'the arguments object is not an array');
    t.ok(isArray([1, 2, 3]), 'but arrays are');
    t.ok(isArray([]), 'even empty ones');
    t.end();
});
