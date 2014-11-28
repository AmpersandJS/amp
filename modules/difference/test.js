var test = require('tape');
var difference = require('./difference');


test('amp-difference', function (t) {
    var result = difference([1, 2, 3], [2, 30, 40]);
    t.deepEqual(result, [1, 3], 'takes the difference of two arrays');

    result = difference([1, 2, 3, 4], [2, 30, 40], [1, 11, 111]);
    t.deepEqual(result, [3, 4], 'takes the difference of three arrays');

    result = difference([1, 2, 3], 1);
    t.deepEqual(result, [1, 2, 3], 'restrict the difference to arrays only');
    t.end();
});
