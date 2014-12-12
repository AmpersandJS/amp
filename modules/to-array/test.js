var test = require('tape');
var toArray = require('./to-array');
var map = require('amp-map');
var identity = require('amp-identity');
var isArray = require('amp-is-array');

test('amp-to-array', function (t) {
    t.ok(!isArray(arguments), 'arguments object is not an array');
    t.ok(isArray(toArray(arguments)), 'arguments object converted into array');
    var a = [1, 2, 3];
    t.ok(toArray(a) !== a, 'array is cloned');
    t.deepEqual(toArray(a), [1, 2, 3], 'cloned array contains same elements');

    var numbers = toArray({one : 1, two : 2, three : 3});
    t.deepEqual(numbers, [1, 2, 3], 'object flattened into array');
    t.end();
});
