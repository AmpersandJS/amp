var test = require('tape');
var isDate = require('./is-date');


test('amp-is-date', function (t) {
    t.ok(!isDate(100), 'numbers are not dates');
    t.ok(!isDate({}), 'objects are not dates');
    t.ok(isDate(new Date()), 'but dates are');
    t.end();
});
