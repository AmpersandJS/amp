var test = require('tape');
var next = require('./next');


var arr = ['a', 'b', 'c'];

test('amp-next', function (t) {
    t.equals(next(arr), 'a');
    t.equals(next(arr, 'a'), 'b');
    t.equals(next(arr, 'c'), 'a');
    t.end();
});
