var test = require('tape');
var includes = require('./includes');


test('amp-includes', function (t) {
    var myString = 'Oh, hello there!';

    t.ok(includes(myString, 'hello'));
    t.notOk(includes(myString, 'hello', 10));
    t.ok(includes(myString, 'hello', 4));
    t.notOk(includes(myString, 'hello', 5));
    t.notOk(includes(myString, 'hi'));

    t.end();
});
