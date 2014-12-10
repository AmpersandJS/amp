var test = require('tape');
var first = require('./first');


test('amp-first', function (t) {
    t.equal(first([1, 2, 3]), 1, 'can pull out the first element of an array');
    t.deepEqual(first([1, 2, 3], 0), [], 'can pass an index to first');
    t.deepEqual(first([1, 2, 3], 2), [1, 2], 'can pass an index to first');
    t.deepEqual(first([1, 2, 3], 5), [1, 2, 3], 'can pass an index to first');
    var result = (function(){ return first(arguments); }(1, 2, 3, 4));
    t.equal(result, 1, 'works on an arguments object');
    if ([].map) {
        result = [[1, 2, 3], [1, 2, 3]].map(first);
        t.deepEqual(result, [1, 1], 'works well with map');
    }

    t.equal(first(null), undefined, 'handles nulls');
    t.strictEqual(first([1, 2, 3], -1).length, 0);
    t.end();
});
