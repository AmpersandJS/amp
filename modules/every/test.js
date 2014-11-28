var test = require('tape');
var every = require('./every');
var isNumber = require('../is-number');
var isObject = require('../is-object');


test('amp-every', function (t) {
    var identity = function (val) {
        return val;
    };

    t.ok(every([], identity), 'the empty set');
    t.ok(every([true, true, true], identity), 'every true values');
    t.notOk(every([true, false, true], identity), 'one false value');
    
    var isEven = function(num){
        return num % 2 === 0;
    };

    t.ok(every([0, 10, 28], isEven), 'even numbers');
    t.notOk(every([0, 11, 28], isEven), 'an odd number');

    t.ok(every([1], identity) === true, 'cast to boolean - true');
    t.ok(every([0], identity) === false, 'cast to boolean - false');
    t.notOk(every([undefined, undefined, undefined], identity), 'works with arrays of undefined');

    var list = [{a: 1, b: 2}, {a: 2, b: 2}, {a: 1, b: 3}, {a: 1, b: 4}];
    t.notOk(every(list, {a: 1, b: 2}), 'Can be called with object');
    t.ok(every(list, 'a'), 'String mapped to object property');

    list = [{a: 1, b: 2}, {a: 2, b: 2, c: true}];
    t.ok(every(list, {b: 2}), 'Can be called with object');
    t.notOk(every(list, 'c'), 'String mapped to object property');

    t.ok(every({a: 1, b: 2, c: 3, d: 4}, isNumber), 'takes objects');
    t.notOk(every({a: 1, b: 2, c: 3, d: 4}, isObject), 'takes objects');
    
    var hasProperty = function (value) {
        return !!this[value];
    };

    t.ok(every(['a', 'b', 'c', 'd'], hasProperty, {a: 1, b: 2, c: 3, d: 4}), 'context works');
    t.notOk(every(['a', 'b', 'c', 'd', 'f'], hasProperty, {a: 1, b: 2, c: 3, d: 4}), 'context works');
    t.end();
});
