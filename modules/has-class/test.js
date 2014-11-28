var test = require('tape');
var hasClass = require('./has-class');


function getEl(className) {
    var div = document.createElement('div');
    div.className = className;
    return div;
}

test('amp-has-class', function (t) {
    t.ok(hasClass(getEl('hi'), 'hi'));
    t.ok(hasClass(getEl('hi there'), 'there'));
    t.notOk(hasClass(getEl('hi'), 'something'));
    t.notOk(hasClass(getEl('hi there'), 'something'));
    t.notOk(hasClass(getEl('hi-there'), 'hi'));
    t.notOk(hasClass(getEl('hi-there'), 'there'));
    t.notOk(hasClass(getEl('hi-there'), 'i-t'));
    t.notOk(hasClass(getEl('hi-there'), '-'));
    t.notOk(hasClass(getEl('hi-there')));
    t.end();
});
