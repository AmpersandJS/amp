var test = require('tape');
var unique = require('./unique');
var map = require('../map');


test('amp-unique', function (t) {
    var list = [1, 2, 1, 3, 1, 4];
    t.deepEqual(unique(list), [1, 2, 3, 4], 'can find the unique values of an unsorted array');

    list = [1, 1, 1, 2, 2, 3];
    t.deepEqual(unique(list, true), [1, 2, 3], 'can find the unique values of a sorted array faster');

    list = [{name: 'moe'}, {name: 'curly'}, {name: 'larry'}, {name: 'curly'}];
    var iterator = function(value) { return value.name; };
    t.deepEqual(map(unique(list, false, iterator), iterator), ['moe', 'curly', 'larry'], 'can find the unique values of an array using a custom iterator');

    t.deepEqual(map(unique(list, iterator), iterator), ['moe', 'curly', 'larry'], 'can find the unique values of an array using a custom iterator without specifying whether array is sorted');

    iterator = function(value) { return value + 1; };
    list = [1, 2, 2, 3, 4, 4];
    t.deepEqual(unique(list, true, iterator), [1, 2, 3, 4], 'iterator works with sorted array');

    var kittens = [
        {kitten: 'Celery', cuteness: 8},
        {kitten: 'Juniper', cuteness: 10},
        {kitten: 'Spottis', cuteness: 10}
    ];

    var expected = [
        {kitten: 'Celery', cuteness: 8},
        {kitten: 'Juniper', cuteness: 10}
    ];

    t.deepEqual(unique(kittens, true, 'cuteness'), expected, 'string iterator works with sorted array');


    var result = (function(){ return unique(arguments); }(1, 2, 1, 3, 1, 4));
    t.deepEqual(result, [1, 2, 3, 4], 'works on an arguments object');

    var a = {}, b = {}, c = {};
    t.deepEqual(unique([a, b, a, b, c]), [a, b, c], 'works on values that can be tested for equivalency but not ordered');

    t.deepEqual(unique(null), []);

    var context = {};
    list = [3];
    unique(list, function(value, index, array) {
        t.strictEqual(this, context);
        t.strictEqual(value, 3);
        t.strictEqual(index, 0);
        t.strictEqual(array, list);
    }, context);

    t.deepEqual(unique([{a: 1, b: 1}, {a: 1, b: 2}, {a: 1, b: 3}, {a: 2, b: 1}], 'a'), [{a: 1, b: 1}, {a: 2, b: 1}], 'can use pluck like iterator');
    t.deepEqual(unique([{0: 1, b: 1}, {0: 1, b: 2}, {0: 1, b: 3}, {0: 2, b: 1}], 0), [{0: 1, b: 1}, {0: 2, b: 1}], 'can use falsey pluck like iterator');
    t.end();
});
