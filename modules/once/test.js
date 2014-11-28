var test = require('tape');
var once = require('./once');


test('amp-once', function (t) {
    var num = 0;
    var increment = once(function () {
        return ++num;
    });
    increment();
    increment();
    t.equal(num, 1, 'should never call more than once');
    t.equal(increment(), 1, 'stores a memo of the last value');
    var sayHi = once(function (name) {
        return name;
    });
    t.equal(sayHi('there'), 'there', 'make sure arguments are being applied');
    t.equal(sayHi('new thing'), 'there', 'should still return the same thing');
    t.end();
});
