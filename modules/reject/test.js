var test = require('tape');
var reject = require('./reject');


test('amp-reject', function (t) {
    var odds = reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 === 0; });
    t.deepEqual(odds, [1, 3, 5], 'rejected each even number');

    var context = 'obj';

    var evens = reject([1, 2, 3, 4, 5, 6], function(num){
      t.equal(context, 'obj');
      return num % 2 !== 0;
    }, context);
    t.deepEqual(evens, [2, 4, 6], 'rejected each odd number');

    t.deepEqual(reject([odds, {one: 1, two: 2, three: 3}], 'two'), [odds], 'predicate string map to object properties');

    // Can be used like reject-where.
    var list = [{a: 1, b: 2}, {a: 2, b: 2}, {a: 1, b: 3}, {a: 1, b: 4}];
    t.deepEqual(reject(list, {a: 1}), [{a: 2, b: 2}]);
    t.deepEqual(reject(list, {b: 2}), [{a: 1, b: 3}, {a: 1, b: 4}]);
    t.deepEqual(reject(list, {}), [], 'Returns empty list given empty object');
    t.deepEqual(reject(list, []), [], 'Returns empty list given empty array');
    t.end();
});
