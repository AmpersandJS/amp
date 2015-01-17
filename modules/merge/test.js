var test = require('tape');
var merge = require('./merge');
var keys = require('amp-keys');

test('amp-merge', function (t) {
    var result;
    var obj = {
        test: 'test',
        beep: 'boop'
    };

    t.deepEqual(merge(obj, {a: 'b'}), { a: 'b', beep: 'boop', test: 'test' }, 'can merge an object with the attributes of another');
    t.deepEqual(obj, { test: 'test', beep: 'boop' }, 'check that obj remains unchanged');

    t.equal(merge({a: 'x'}, {a: 'b'}).a, 'b', 'properties in source override destination');
    t.equal(merge({x: 'x'}, {a: 'b'}).x, 'x', "properties not in source don't get overridden");
    result = merge({x: 'x'}, {a: 'a'}, {b: 'b'});
    t.deepEqual(result, {x: 'x', a: 'a', b: 'b'}, 'can merge from multiple source objects');
    result = merge({x: 'x'}, {a: 'a', x: 2}, {a: 'b'});
    t.deepEqual(result, {x: 2, a: 'b'}, 'merge from multiple source objects last property trumps');
    result = merge({}, {a: void 0, b: null});
    t.deepEqual(keys(result), ['a', 'b'], 'merge copies undefined values');

    var F = function() {};
    F.prototype = {a: 'b'};
    var subObj = new F();
    subObj.c = 'd';
    t.deepEqual(merge({}, subObj), {a: 'b', c: 'd'}, 'merge copies all properties from source');

    t.deepEqual(merge(null, {a: 1}), { a: 1 }, 'will allow a parameter to be null');
    t.deepEqual(merge(undefined, {a: 1}), { a: 1 }, 'will allow a parameter to be null undefined');

    t.end();
});