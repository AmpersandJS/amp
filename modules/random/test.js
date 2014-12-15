var test = require('tape');
var random = require('./random');
var every = require('amp-every');
var some = require('amp-some');
var range = require('amp-range');


test('amp-random', function (t) {
    var array = range(1000);
    var min = Math.pow(2, 31);
    var max = Math.pow(2, 62);

    t.ok(every(array, function() {
      return random(min, max) >= min;
    }), 'should produce a random number greater than or equal to the minimum number');

    t.ok(some(array, function() {
      return random(Number.MAX_VALUE) > 0;
    }), 'should produce a random number when passed `Number.MAX_VALUE`');
    t.end();
});
