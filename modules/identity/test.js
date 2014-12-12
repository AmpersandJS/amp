var test = require('tape');
var identity = require('./identity');

test('amp-identity', function (t) {
    var widget = {name : 'widget'};
    t.equal(identity(widget), widget, 'widget is the same as its identity');
    t.end();
});
