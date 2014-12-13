var test = require('tape');
var sortBy = require('./sort-by');
var pluck = require('amp-pluck');
var identity = require('amp-identity');


test('amp-sort-by', function (t) {
    var people = [{name : 'curly', age : 50}, {name : 'moe', age : 30}];
    people = sortBy(people, function(person){ return person.age; });
    t.deepEqual(pluck(people, 'name'), ['moe', 'curly'], 'stooges sorted by age');

    var list = [undefined, 4, 1, undefined, 3, 2];
    t.deepEqual(sortBy(list, identity), [1, 2, 3, 4, undefined, undefined], 'sortBy with undefined values');

    list = ['one', 'two', 'three', 'four', 'five'];
    var sorted = sortBy(list, 'length');
    t.deepEqual(sorted, ['one', 'two', 'four', 'five', 'three'], 'sorted by length');

    function Pair(x, y) {
        this.x = x;
        this.y = y;
    }

    var collection = [
        new Pair(1, 1), new Pair(1, 2),
        new Pair(1, 3), new Pair(1, 4),
        new Pair(1, 5), new Pair(1, 6),
        new Pair(2, 1), new Pair(2, 2),
        new Pair(2, 3), new Pair(2, 4),
        new Pair(2, 5), new Pair(2, 6),
        new Pair(undefined, 1), new Pair(undefined, 2),
        new Pair(undefined, 3), new Pair(undefined, 4),
        new Pair(undefined, 5), new Pair(undefined, 6)
    ];

    var actual = sortBy(collection, function(pair) {
        return pair.x;
    });

    t.deepEqual(actual, collection, 'sortBy should be stable');

    t.deepEqual(sortBy(collection, 'x'), collection, 'sortBy accepts property string');

    list = ['q', 'w', 'e', 'r', 't', 'y'];
    t.deepEqual(sortBy(list), ['e', 'q', 'r', 't', 'w', 'y'], 'uses _.identity if iterator is not specified');
    t.end();
});
