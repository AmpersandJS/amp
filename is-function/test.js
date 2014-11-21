var test = require('tape');
var isFunction = require('./is-function');


test('amp-is-function', function (t) {
    t.ok(!isFunction(undefined), 'undefined vars are not functions');
    t.ok(!isFunction([1, 2, 3]), 'arrays are not functions');
    t.ok(!isFunction('moe'), 'strings are not functions');
    if (typeof document !== 'undefined') {
        t.ok(!isFunction(document.createElement('div')), 'elements are not functions');
    }
    t.ok(isFunction(isFunction), 'but functions are');
    t.ok(isFunction(function(){}), 'even anonymous ones');
    t.end();
});
