var test = require('tape');
var isBoolean = require('./is-boolean');


test('amp-is-boolean', function (t) {
    t.ok(!isBoolean(2), 'a number is not a boolean');
    t.ok(!isBoolean('string'), 'a string is not a boolean');
    t.ok(!isBoolean('false'), 'the string "false" is not a boolean');
    t.ok(!isBoolean('true'), 'the string "true" is not a boolean');
    t.ok(!isBoolean(arguments), 'the arguments object is not a boolean');
    t.ok(!isBoolean(undefined), 'undefined is not a boolean');
    t.ok(!isBoolean(NaN), 'NaN is not a boolean');
    t.ok(!isBoolean(null), 'null is not a boolean');
    t.ok(isBoolean(true), 'but true is');
    t.ok(isBoolean(false), 'and so is false');
    t.end();
});
