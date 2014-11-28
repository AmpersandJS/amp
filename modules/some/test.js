var test = require('tape');
var some = require('./some');
var isObject = require('../is-object');
var isNumber = require('../is-number');


test('amp-some', function (t) {
    t.notOk(some([]), 'the empty set');
    t.notOk(some([false, false, false]), 'all false values');
    t.ok(some([false, false, true]), 'one true value');
    t.ok(some([null, 0, 'yes', false]), 'a string');
    t.notOk(some([null, 0, '', false]), 'falsy values');
    
    var isEven = function (num) {
        return num % 2 === 0;
    };

    t.notOk(some([1, 11, 29], isEven), 'all odd numbers');
    t.ok(some([1, 10, 29], isEven), 'an even number');
    
    var identity = function (val) {
        return val;
    };

    t.ok(some([1], identity) === true, 'cast to boolean - true');
    t.ok(some([0], identity) === false, 'cast to boolean - false');
    t.ok(some([false, false, true]));

    var list = [{a: 1, b: 2}, {a: 2, b: 2}, {a: 1, b: 3}, {a: 1, b: 4}];
    t.notOk(some(list, {a: 5, b: 2}), 'Can be called with object');
    t.ok(some(list, 'a'), 'String mapped to object property');

    list = [{a: 1, b: 2}, {a: 2, b: 2, c: true}];
    t.ok(some(list, {b: 2}), 'Can be called with object');
    t.notOk(some(list, 'd'), 'String mapped to object property');

    t.ok(some({a: '1', b: '2', c: '3', d: '4', e: 6}, isNumber), 'takes objects');
    t.notOk(some({a: 1, b: 2, c: 3, d: 4}, isObject), 'takes objects');
    
    var hasProperty = function (value) {
        return !!this[value];
    };

    t.ok(some(['a', 'b', 'c', 'd'], hasProperty, {a: 1, b: 2, c: 3, d: 4}), 'context works');
    t.notOk(some(['x', 'y', 'z'], hasProperty, {a: 1, b: 2, c: 3, d: 4}), 'context works');
    t.end();
});
