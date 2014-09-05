var test = require('tape');
var pack = require('./package.json');
var isFunction = require('./' + pack.main);


test('is-function', function (t) {
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
