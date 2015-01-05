var test = require('tape');
var indexOf = require('./index-of');
var isArray = require('amp-is-array');
var each = require('amp-each');


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
    
    each([null, void 0, [], false], function(val) {
        var msg = 'Handles: ' + (isArray(val) ? '[]' : val);
        t.equal(indexOf(val, 2), -1, msg);
        t.equal(indexOf(val, 2, -1), -1, msg);
        t.equal(indexOf(val, 2, -20), -1, msg);
        t.equal(indexOf(val, 2, 15), -1, msg);
    });

    var numbers = [1, 2, 3, 1, 2, 3, 1, 2, 3];
    t.equal(indexOf(numbers, 2, 5), 7, 'supports the fromIndex argument');

    index = indexOf([,,,], undefined);
    t.equal(index, 0, 'treats sparse arrays as if they were dense');

    var array = [1, 2, 3, 1, 2, 3];
    t.strictEqual(indexOf(array, 1, -3), 3, 'neg `fromIndex` starts at the right index');
    t.strictEqual(indexOf(array, 1, -2), -1, 'neg `fromIndex` starts at the right index');
    t.strictEqual(indexOf(array, 2, -3), 4);
    each([-6, -8, -Infinity], function(fromIndex) {
      t.strictEqual(indexOf(array, 1, fromIndex), 0);
    });
    t.strictEqual(indexOf([1, 2, 3], 1, true), 0);

    t.end();
});


