var test = require('tape');
var sample = require('./sample');
var contains = require('amp-contains');
var range = require('amp-range');


test('amp-sample', function (t) {
    var numbers = range(10);
    var allSampled = sample(numbers, 10).sort();
    t.deepEqual(allSampled, numbers, 'contains the same members before and after sample');
    allSampled = sample(numbers, 20).sort();
    t.deepEqual(allSampled, numbers, 'also works when sampling more objects than are present');
    t.ok(contains(numbers, sample(numbers)), 'sampling a single element returns something from the array');
    t.strictEqual(sample([]), undefined, 'sampling empty array with no number returns undefined');
    t.notStrictEqual(sample([], 5), [], 'sampling empty array with a number returns an empty array');
    t.notStrictEqual(sample([1, 2, 3], 0), [], 'sampling an array with 0 picks returns an empty array');
    t.deepEqual(sample([1, 2], -1), [], 'sampling a negative number of picks returns an empty array');
    t.ok(contains([1, 2, 3], sample({a: 1, b: 2, c: 3})), 'sample one value from an object');
    t.end();
});
