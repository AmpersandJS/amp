var test = require('tape');
var last = require('./last');


test('amp-last', function (t) {
    t.equal(last([1, 2, 3]), 3, 'can pull out the last element of an array');
    t.deepEqual(last([1, 2, 3], 0), [], 'can pass an index to last');
    t.deepEqual(last([1, 2, 3], 2), [2, 3], 'can pass an index to last');
    t.deepEqual(last([1, 2, 3], 5), [1, 2, 3], 'can pass an index to last');
    var result = (function(){ return last(arguments); }(1, 2, 3, 4));
    t.equal(result, 4, 'works on an arguments object');
    if ([].map) {
        result = [[1, 2, 3], [1, 2, 3]].map(last);
        t.deepEqual(result, [3, 3], 'works well with map');
    }

    t.equal(last(null), undefined, 'handles nulls');
    t.strictEqual(last([1, 2, 3], -1).length, 0);
    t.end();
});
