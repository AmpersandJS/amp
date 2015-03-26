var test = require('tape');
var arrayToReadable = require('./array-to-readable');


test('amp-array-to-readable', function (t) {
    t.equal(arrayToReadable([1, 2, 3]), '1, 2, and 3');
    t.equal(arrayToReadable([1, 2]), '1 and 2');
    t.equal(arrayToReadable([1]), '1');
    t.equal(arrayToReadable(['one', 'two', 'three', 'four']), 'one, two, three, and four');
    t.equal(arrayToReadable(['one', 'two', 'three', 'four'], {conjunction: 'or'}), 'one, two, three, or four');
    t.equal(arrayToReadable(['one', 'two', 'three', 'four'], {oxford: false}), 'one, two, three and four');
    t.end();
});
