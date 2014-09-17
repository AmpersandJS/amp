var test = require('tape');
var pack = require('./package.json');
var has = require('./' + pack.main);


test('amp-has', function (t) {
    t.ok(has({'hi': 'thing'}, 'hi'));
    t.ok(!has({'hi': 'thing'}, 'hasOwnProperty'));
    t.ok(!has(['a', 'b'], 'a'));
    t.ok(!has(undefined, 1));
    t.ok(!has(null, 1));
    t.ok(!has(NaN, 1));
    t.end();
});
