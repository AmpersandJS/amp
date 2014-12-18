var test = require('tape');
var union = require('./union');


test('amp-union', function (t) {
    var result = union([1, 2, 3], [2, 30, 1], [1, 40]);
    t.deepEqual(result, [1, 2, 3, 30, 40], 'takes the union of a list of arrays');

    result = union([1, 2, 3], [2, 30, 1], [1, 40, [1]]);
    t.deepEqual(result, [1, 2, 3, 30, 40, [1]], 'takes the union of a list of nested arrays');

    var args = null;
    (function(){ args = arguments; }(1, 2, 3));
    result = union(args, [2, 30, 1], [1, 40]);
    t.deepEqual(result, [1, 2, 3, 30, 40], 'takes the union of a list of arrays');

    result = union([1, 2, 3], 4);
    t.deepEqual(result, [1, 2, 3], 'restrict the union to arrays only');
    t.end();
});
