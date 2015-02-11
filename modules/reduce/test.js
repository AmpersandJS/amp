var test = require('tape');
var reduce = require('./reduce');


test('amp-reduce', function (t) {
    var sum = reduce([1, 2, 3], function(sum, num){ return sum + num; }, 0);
    t.equal(sum, 6, 'can sum up an array');

    sum = reduce({one: 1, two: 2, three: 3}, function(sum, num, key, obj){ return sum + obj[key]; }, 0);
    t.equal(sum, 6, 'can sum up an object');

    var context = {multiplier : 3};
    sum = reduce([1, 2, 3], function(sum, num){ return sum + num * this.multiplier; }, 0, context);
    t.equal(sum, 18, 'can reduce with a context object');

    sum = reduce([1, 2, 3], function(sum, num){ return sum + num; });
    t.equal(sum, 6, 'default initial value');

    var prod = reduce([1, 2, 3, 4], function(prod, num){ return prod * num; });
    t.equal(prod, 24, 'can reduce via multiplication');

    t.ok(reduce(null, function() {}, 138) === 138, 'handles a null (with initial value) properly');
    t.equal(reduce([], function() {}, undefined), undefined, 'undefined can be passed as a special case');
    t.equal(reduce(['_'], function() {}), '_', 'collection of length one with no initial value returns the first item');
    t.throws(function() {
        reduce([], function() {});
    }, TypeError, 'throws TypeError when array is empty and no initial value');

    t.throws(function() {
        reduce({}, function() {});
    }, TypeError, 'throws TypeError when object is empty and no initial value');

    t.end();
});
