var test = require('tape');
var negate = require('./negate');

test('amp-negate', function (t) {
    var isOdd = function(n){ return n & 1; };
    t.equal(negate(isOdd)(2), true, 'should return the complement of the given function');
    t.equal(negate(isOdd)(3), false, 'should return the complement of the given function');
    t.end();
});
