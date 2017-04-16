var test = require('tape');
var capitalize = require('./capitalize');


test('amp-capitalize', function (t) {
    t.equal(capitalize('hi'), 'Hi', 'basic functionality');
    t.equal(capitalize('hi there'), 'Hi there', 'only does first');
    t.equal(capitalize(' hi'), ' hi', 'does not trim whitespace');
    t.equal(capitalize('Hi', false), 'hi', 'can be used to lowercase also');
    t.end();
});
