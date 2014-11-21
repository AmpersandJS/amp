var test = require('tape');
var bind = require('./bind');


test('amp-bind', function (t) {
    var context = {name : 'moe'};
    var func = function(arg) {
        return 'name: ' + (this.name || arg);
    };
    var bound = bind(func, context);
    t.equal(bound(), 'name: moe', 'can bind a function to a context');

    bound = bind(func, context);
    t.equal(bound(), 'name: moe', 'can do OO-style binding');

    bound = bind(func, null, 'curly');
    t.equal(bound(), 'name: curly', 'can bind without specifying a context');

    func = function(salutation, name) {
        return salutation + ': ' + name;
    };
    func = bind(func, this, 'hello');
    t.equal(func('moe'), 'hello: moe', 'the function was partially applied in advance');

    func = bind(func, this, 'curly');
    t.equal(func(), 'hello: curly', 'the function was completely applied in advance');

    func = function(salutation, firstname, lastname) {
        return salutation + ': ' + firstname + ' ' + lastname;
    };
    func = bind(func, this, 'hello', 'moe', 'curly');
    t.equal(func(), 'hello: moe curly', 'the function was partially applied in advance and can accept multiple arguments');

    func = function(context, message) {
        t.ok(this == context, message);
    };
    bind(func, 0, 0, 'can bind a function to `0`')();
    bind(func, '', '', 'can bind a function to an empty string')();
    bind(func, false, false, 'can bind a function to `false`')();

    // These tests are only meaningful when using a browser without a native bind function
    // To test this with a modern browser, set underscore's nativeBind to undefined
    var F = function () { return this; };
    var boundf = bind(F, {hello: 'moe curly'});
    var Boundf = boundf; // make eslint happy.
    var newBoundf = new Boundf();
    t.equal(newBoundf.hello, undefined, 'function should not be bound to the context, to comply with ECMAScript 5');
    t.equal(boundf().hello, 'moe curly', "When called without the new operator, it's OK to be bound to the context");
    t.ok(newBoundf instanceof F, 'a bound instance is an instance of the original function');

    t.throws(function() {
        bind('notafunction');
    }, TypeError, 'throws an error when binding to a non-function');
    t.end();
});
