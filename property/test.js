var test = require('tape');
var property = require('./property');


test('amp-property', function (t) {
    var greetingGetter = property('greeting');
    var person = {greeting: 'oh, hello!'};

    t.equal(greetingGetter(person), 'oh, hello!');
    t.end();
});
