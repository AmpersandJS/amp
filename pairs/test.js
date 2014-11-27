var test = require('tape');
var pairs = require('./pairs');


test('amp-pairs', function (t) {
    t.deepEqual(pairs({one: 1, two: 2, three: 3}), [['one', 1], ['two', 2], ['three', 3]]);
    t.end();
});
