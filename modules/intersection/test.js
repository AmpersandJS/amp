var test = require('tape');
var intersection = require('./intersection');


test('amp-intersection', function (t) {
    var stooges = ['moe', 'curly', 'larry']
    var leaders = ['moe', 'groucho'];

    t.deepEqual(intersection(stooges, leaders), ['moe'], 'can take the set intersection of two arrays');

    var result = (function(){ return intersection(arguments, leaders); }('moe', 'curly', 'larry'));
    t.deepEqual(result, ['moe'], 'works on an arguments object');

    var theSixStooges = ['moe', 'moe', 'curly', 'curly', 'larry', 'larry'];
    t.deepEqual(intersection(theSixStooges, leaders), ['moe'], 'returns a duplicate-free array');

    result = intersection([2, 4, 3, 1], [1, 2, 3]);
    t.deepEqual(result, [2, 3, 1], 'preserves order of first array');

    result = intersection(null, [1, 2, 3]);
    t.equal(Object.prototype.toString.call(result), '[object Array]', 'returns an empty array when passed null as first argument');
    t.equal(result.length, 0, 'returns an empty array when passed null as first argument');

    result = intersection([1, 2, 3], null);
    t.equal(Object.prototype.toString.call(result), '[object Array]', 'returns an empty array when passed null as argument beyond the first');
    t.equal(result.length, 0, 'returns an empty array when passed null as argument beyond the first');

    t.end();
});
