var test = require('tape');
var partial = require('./partial');
var toArray = require('amp-to-array');


test('amp-partial', function (t) {
    var obj = {name: 'moe'};
    var func = function() { return this.name + ' ' + toArray(arguments).join(' '); };

    obj.func = partial(func, 'a', 'b');
    t.equal(obj.func('c', 'd'), 'moe a b c d', 'can partially apply');

    obj.func = partial(func, partial, 'b', partial, 'd');
    t.equal(obj.func('a', 'c'), 'moe a b c d', 'can partially apply with placeholders');

    func = partial(function() { return arguments.length; }, partial, 'b', partial, 'd');
    t.equal(func('a', 'c', 'e'), 5, 'accepts more arguments than the number of placeholders');
    t.equal(func('a'), 4, 'accepts fewer arguments than the number of placeholders');

    func = partial(function() { return typeof arguments[2]; }, partial, 'b', partial, 'd');
    t.equal(func('a'), 'undefined', 'unfilled placeholders are undefined');

    // passes context
    function MyWidget(name, options) {
        this.name = name;
        this.options = options;
    }
    MyWidget.prototype.get = function() {
        return this.name;
    };
    var MyWidgetWithCoolOpts = partial(MyWidget, partial, {a: 1});
    var widget = new MyWidgetWithCoolOpts('foo');
    t.ok(widget instanceof MyWidget, 'Can partially bind a constructor');
    t.equal(widget.get(), 'foo', 'keeps prototype');
    t.deepEqual(widget.options, {a: 1});
    t.end();
});
