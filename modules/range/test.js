var test = require('tape');
var range = require('./range');


test('amp-range', function (t) {
    t.deepEqual(range(0), [], 'range with 0 as a first argument generates an empty array');
    t.deepEqual(range(4), [0, 1, 2, 3], 'range with a single positive argument generates an array of elements 0,1,2,...,n-1');
    t.deepEqual(range(5, 8), [5, 6, 7], 'range with two arguments a &amp; b, a&lt;b generates an array of elements a,a+1,a+2,...,b-2,b-1');
    t.deepEqual(range(8, 5), [], 'range with two arguments a &amp; b, b&lt;a generates an empty array');
    t.deepEqual(range(3, 10, 3), [3, 6, 9], 'range with three arguments a &amp; b &amp; c, c &lt; b-a, a &lt; b generates an array of elements a,a+c,a+2c,...,b - (multiplier of a) &lt; c');
    t.deepEqual(range(3, 10, 15), [3], 'range with three arguments a &amp; b &amp; c, c &gt; b-a, a &lt; b generates an array with a single element, equal to a');
    t.deepEqual(range(12, 7, -2), [12, 10, 8], 'range with three arguments a &amp; b &amp; c, a &gt; b, c &lt; 0 generates an array of elements a,a-c,a-2c and ends with the number not less than b');
    t.deepEqual(range(0, -10, -1), [0, -1, -2, -3, -4, -5, -6, -7, -8, -9], 'final example in the Python docs');
    t.end();
});
