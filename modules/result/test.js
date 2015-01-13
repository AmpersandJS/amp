var test = require('tape');
var result = require('./result');


test('amp-result', function(t) {
    var obj = {
        w: '',
        x: 'x',
        y: function () {
            return this.x;
        }
    };
    t.strictEqual(result(obj, 'w'), '');
    t.strictEqual(result(obj, 'x'), 'x');
    t.strictEqual(result(obj, 'y'), 'x');
    t.strictEqual(result(obj, 'z'), undefined);
    t.strictEqual(result(null, 'x'), undefined);

    t.strictEqual(result(null, 'b', 'default'), 'default');
    t.strictEqual(result(undefined, 'c', 'default'), 'default');
    t.strictEqual(result(''.match('missing'), 1, 'default'), 'default');

    t.strictEqual(result({d: null}, 'd', 'default'), null);
    t.strictEqual(result({e: false}, 'e', 'default'), false);

    t.strictEqual(result({}, 'b', 'default'), 'default');
    t.strictEqual(result({d: undefined}, 'd', 'default'), 'default');

    var Foo = function(){};
    Foo.prototype.bar = 1;
    t.strictEqual(result(new Foo, 'bar', 2), 1);

    var obj = {a: function() {}};
    t.strictEqual(result(obj, 'a', 'failed'), undefined);

    var defaultFunc = function () {
        return 'hi';
    };

    t.strictEqual(result({}, 'something', defaultFunc), 'hi', 'should execute default value if func');

    t.end();
});
