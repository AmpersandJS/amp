var test = require('tape');
var filter = require('./filter');


test('amp-filter', function (t) {
    var evenArray = [1, 2, 3, 4, 5, 6];
    var evenObject = {one: 1, two: 2, three: 3};
    
    var isEven = function(num){ 
        return num % 2 === 0;
    };

    t.deepEqual(filter(evenArray, isEven), [2, 4, 6]);
    t.deepEqual(filter(evenObject, isEven), [2], 'can filter objects');
    t.deepEqual(filter([{}, evenObject, []], 'two'), [evenObject], 'predicate string map to object properties');

    filter([1], function() {
        t.equal(this, evenObject, 'given context');
    }, evenObject);

    // Can be used like amp-where.
    var list = [{a: 1, b: 2}, {a: 2, b: 2}, {a: 1, b: 3}, {a: 1, b: 4}];
    
    t.deepEqual(filter(list, {a: 1}), [{a: 1, b: 2}, {a: 1, b: 3}, {a: 1, b: 4}]);
    t.deepEqual(filter(list, {b: 2}), [{a: 1, b: 2}, {a: 2, b: 2}]);
    t.deepEqual(filter(list, {}), list, 'Empty object accepts all items');
    
    t.end();
});
