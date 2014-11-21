var test = require('tape');
var size = require('./size');


test('amp-size', function (t) {
    t.equal(size({one : 1, two : 2, three : 3}), 3, 'can compute the size of an object');
    t.equal(size([1, 2, 3]), 3, 'can compute the size of an array');
    t.equal(size({length: 3, 0: 0, 1: 0, 2: 0}), 3, 'can compute the size of Array-likes');

    var func = function() {
        return size(arguments);
    };

    t.equal(func(1, 2, 3, 4), 4, 'can test the size of the arguments object');

    t.equal(size('hello'), 5, 'can compute the size of a string literal');
    t.equal(size(new String('hello')), 5, 'can compute the size of string object');

    t.equal(size(null), 0, 'handles nulls');
    t.end();
});
