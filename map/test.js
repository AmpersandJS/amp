var test = require('tape');
var map = require('./map');


test('amp-map', function (t) {
    var doubled = map([1, 2, 3], function(num){ return num * 2; });
    t.deepEqual(doubled, [2, 4, 6], 'doubled numbers');

    var tripled = map([1, 2, 3], function(num){ return num * this.multiplier; }, {multiplier : 3});
    t.deepEqual(tripled, [3, 6, 9], 'tripled numbers with context');

    var ids = map({length: 2, 0: {id: '1'}, 1: {id: '2'}}, function(n){
        return n.id;
    });
    t.deepEqual(ids, ['1', '2'], 'Can use collection methods on Array-likes.');

    t.deepEqual(map(null, function () {}), [], 'handles a null properly');

    t.deepEqual(map([1], function() {
        return this.length;
    }, [5]), [1], 'called with context');

    // Passing a property name like _.pluck.
    var people = [{name : 'moe', age : 30}, {name : 'curly', age : 50}];
    t.deepEqual(map(people, 'name'), ['moe', 'curly'], 'predicate string map to object properties');
    t.end();
});
