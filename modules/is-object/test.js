/*global document*/
var test = require('tape');
var isObject = require('./is-object');


test('amp-is-object', function(t) {
    t.ok(isObject(arguments), 'the arguments object is object');
    t.ok(isObject([1, 2, 3]), 'and arrays');
    if (typeof document !== 'undefined') {
        t.ok(isObject(document.body), 'and DOM element');
    }
    t.ok(isObject(function () {}), 'and functions');
    t.ok(!isObject(null), 'but not null');
    t.ok(!isObject(undefined), 'and not undefined');
    t.ok(!isObject('string'), 'and not string');
    t.ok(!isObject(12), 'and not number');
    t.ok(!isObject(true), 'and not boolean');
    t.ok(isObject(new String('string')), 'but new String()');
    t.end();
});
