var test = require('tape');
var flatten = require('./flatten');
var range = require('../range');


test('amp-flatten', function (t) {
    t.deepEqual(flatten(null), [], 'Flattens supports null');
    t.deepEqual(flatten(void 0), [], 'Flattens supports undefined');

    t.deepEqual(flatten([[], [[]], []]), [], 'Flattens empty arrays');
    t.deepEqual(flatten([[], [[]], []], true), [[]], 'Flattens empty arrays');

    var list = [1, [2], [3, [[[4]]]]];
    t.deepEqual(flatten(list), [1, 2, 3, 4], 'can flatten nested arrays');
    t.deepEqual(flatten(list, true), [1, 2, 3, [[[4]]]], 'can shallowly flatten nested arrays');
    var result = (function(){ return flatten(arguments); }(1, [2], [3, [[[4]]]]));
    t.deepEqual(result, [1, 2, 3, 4], 'works on an arguments object');
    list = [[1], [2], [3], [[4]]];
    t.deepEqual(flatten(list, true), [1, 2, 3, [4]], 'can shallowly flatten arrays containing only other arrays');

    t.equal(flatten([range(10), range(10), 5, 1, 3], true).length, 23);
    t.equal(flatten([range(10), range(10), 5, 1, 3]).length, 23);
    t.equal(flatten([new Array(1000000), range(56000), 5, 1, 3]).length, 1056003, 'Flatten can handle massive collections');
    t.equal(flatten([new Array(1000000), range(56000), 5, 1, 3], true).length, 1056003, 'Flatten can handle massive collections');
    t.end();
});
