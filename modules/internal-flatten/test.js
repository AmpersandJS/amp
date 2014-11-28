var test = require('tape');
var flatten = require('./internal-flatten');


test('amp-internal-flatten', function (t) {
    var arr = [1, [1], [[1]], 'something'];

    t.deepEqual(flatten(arr, true, false, []), [1, 1, [1], 'something'], 'shallow');
    t.deepEqual(flatten(arr, false, false, []), [1, 1, 1, 'something'], 'recursive');
    t.deepEqual(flatten(arr, false, true, []), [], 'recursive + strict');
    t.deepEqual(flatten(arr, true, true, []), [1, [1]], 'shallow + strict');

    t.end();
});
