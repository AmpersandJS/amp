var test = require('tape');
var isNumber = require('./is-number');


test('amp-is-number', function (t) {
    t.ok(!isNumber('string'), 'a string is not a number');
    t.ok(!isNumber(arguments), 'the arguments object is not a number');
    t.ok(!isNumber(undefined), 'undefined is not a number');
    t.ok(isNumber(3 * 4 - 7 / 10), 'but numbers are');
    t.ok(isNumber(NaN), 'NaN *is* a number');
    t.ok(isNumber(new Number(5)), 'number objects are numbers');
    t.ok(isNumber(Infinity), 'Infinity is a number');
    t.ok(!isNumber('1'), 'numeric strings are not numbers');
    t.end();
});
