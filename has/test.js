var test = require('tape');
var has = require('./has');


test('amp-has', function (t) {
    t.ok(has({'hi': 'thing'}, 'hi'));
    t.ok(!has({'hi': 'thing'}, 'hasOwnProperty'));
    t.ok(!has(['a', 'b'], 'a'));
    t.ok(!has(undefined, 1));
    t.ok(!has(null, 1));
    t.ok(!has(NaN, 1));
    t.end();
});
