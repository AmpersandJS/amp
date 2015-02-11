var test = require('tape');
var shuffle = require('./shuffle');
var range = require('amp-range');
var every = require('amp-every');
var contains = require('amp-contains');
var bind = require('amp-bind');


test('amp-shuffle', function (t) {
    var numbers = range(10);
    var shuffled = shuffle(numbers);
    t.notStrictEqual(numbers, shuffled, 'original object is unmodified');
    t.ok(every(range(10), function() { //appears consistent?
        return every(numbers, bind(contains, null, numbers));
    }), 'contains the same members before and after shuffle');

    shuffled = shuffle({a: 1, b: 2, c: 3, d: 4});
    t.equal(shuffled.length, 4);
    t.deepEqual(shuffled.sort(), [1, 2, 3, 4], 'works on objects');
    t.end();
});
