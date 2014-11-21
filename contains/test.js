var test = require('tape');
var contains = require('./contains');


test('amp-contains', function (t) {
    t.ok(contains(['hi', 'there'], 'hi'));
    t.ok(contains(['hi', 1], 1));
    var obj = {};
    t.ok([obj, 'hi'], obj);
    t.ok(!contains(undefined, 'hi'));
    t.end();
});
