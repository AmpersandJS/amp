var test = require('tape');
var trim = require('./trim');


test('amp-trim', function (t) {
    t.equal(trim(' oh, hi there! '), 'oh, hi there!');
    t.equal(trim('   oh, hi there!'), 'oh, hi there!');
    t.equal(trim('\n\r\t oh, hi there!'), 'oh, hi there!', 'works for all whitespace types');
    t.end();
});
