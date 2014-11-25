var test = require('tape');
var isArguments = require('./is-arguments');


test('amp-is-arguments', function (t) {
    var args = (function(){ return arguments; }(1, 2, 3));
    t.ok(!isArguments('string'), 'a string is not an arguments object');
    t.ok(!isArguments(function () {}), 'a function is not an arguments object');
    t.ok(isArguments(args), 'but the arguments object is an arguments object');
    t.ok(!isArguments(Array.prototype.slice.call(args)), 'but not when it\'s converted into an array');
    t.ok(!isArguments([1, 2, 3]), 'and not vanilla arrays.');
    t.end();
});
