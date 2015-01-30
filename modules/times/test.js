var test = require('tape');
var times = require('./times');
var identity = function (x) { return x; };


test('amp-times', function (t) {
    // is 0 indexed
    var vals = [];
    times(3, function (i) { vals.push(i); });
    t.deepEqual(vals, [0, 1, 2], 'is 0 indexed');

    // collects return values
    t.deepEqual([0, 1, 2], times(3, function(i) { return i; }), 'collects return values');

    // optionally applies context to iterated function
    var context = {count: 0};
    times(3, function(){
        this.count++;
    }, context);
    t.equal(context.count, 3, 'optionally applies context to the iterated function');

    // doesn't barf on weird values
    t.deepEqual(times(0, identity), [], 'doesn\'t barf on 0');
    t.deepEqual(times(-1, identity), [], 'doesn\'t barf on -1');
    t.deepEqual(times(parseFloat('-Infinity'), identity), [], 'doesn\'t barf on -Infinity');

    t.end();
});
