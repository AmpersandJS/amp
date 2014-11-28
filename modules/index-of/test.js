var test = require('tape');
var indexOf = require('./index-of');


test('amp-index-of', function (t) {
    var args = (function () { return arguments })('hi', 'there');
    t.equal(indexOf(args, 'there'), 1, 'works on `arguments` objects');
    t.equal(indexOf({'hi': 'hello'}, 'hi'), -1, 'returns `-1` if passed object');
    t.equal(indexOf(['a', 'b'], 1), -1);
    t.equal(indexOf(undefined, 1), -1);
    t.equal(indexOf(null, 1), -1);
    t.equal(indexOf(NaN, 1), -1);
    t.equal(indexOf({}, 1), -1);
    t.equal(indexOf(['a'], 'a'), 0);
    t.equal(indexOf(['a' , 1], 1), 1);
    t.end();
});
