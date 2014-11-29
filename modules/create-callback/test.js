var test = require('tape');
var createCallback = require('./create-callback');


test('amp-create-callback', function (t) {
    var argLength = 1;
    var context = {hi: 'there'};

    var callback = createCallback(function () {
        t.equal(this, context, 'should maintain context');
        t.equal(arguments.length, 1, 'should never have more than arg length passed');
    }, context, 1);
    callback(1, 2, 3, 4, 5);

    callback = createCallback(function () {
        t.equal(this, context, 'should maintain context');
        t.equal(arguments.length, 2, 'should never have more than arg length passed');
    }, context, 2);
    callback(1, 2, 3, 4, 5);

    callback = createCallback(function () {
        t.equal(this, context, 'should maintain context');
        t.equal(arguments.length, 3, 'should never have more than arg length passed');
    }, context, 3);
    callback(1, 2, 3, 4, 5);

    callback = createCallback(function () {
        t.equal(this, context, 'should maintain context');
        t.equal(arguments.length, 4, 'should never have more than arg length passed');
    }, context, 4);
    callback(1, 2, 3, 4, 5);
    
    callback = createCallback(function () {
        t.equal(arguments.length, 5, 'should have as many as passed');
    });
    callback(1, 2, 3, 4, 5);
    
    t.end();
});
