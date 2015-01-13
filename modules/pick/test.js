var test = require('tape');
var pick = require('./pick');


test('amp-pick', function (t) {
    var result;
    result = pick({a: 1, b: 2, c: 3}, 'a', 'c');
    t.deepEqual(result, {a: 1, c: 3}, 'can restrict properties to those named');
    result = pick({a: 1, b: 2, c: 3}, ['b', 'c']);
    t.deepEqual(result, {b: 2, c: 3}, 'can restrict properties to those named in an array');
    result = pick({a: 1, b: 2, c: 3}, ['a'], 'b');
    t.deepEqual(result, {a: 1, b: 2}, 'can restrict properties to those named in mixed args');
    result = pick(['a', 'b'], 1);
    t.deepEqual(result, {1: 'b'}, 'can pick numeric properties');

    t.deepEqual(pick(null, 'a', 'b'), {}, 'non objects return empty object');
    t.deepEqual(pick(undefined, 'toString'), {}, 'null/undefined return empty object');
    t.deepEqual(pick(5, 'toString', 'b'), {toString: Number.prototype.toString}, 'can iterate primitives');

    var data = {a: 1, b: 2, c: 3};
    var callback = function(value, key, object) {
        t.strictEqual(key, {1: 'a', 2: 'b', 3: 'c'}[value]);
        t.strictEqual(object, data);
        return value !== this.value;
    };
    result = pick(data, callback, {value: 2});
    t.deepEqual(result, {a: 1, c: 3}, 'can accept a predicate and context');

    var Obj = function(){};
    Obj.prototype = {a: 1, b: 2, c: 3};
    var instance = new Obj();
    t.deepEqual(pick(instance, 'a', 'c'), {a: 1, c: 3}, 'include prototype props');

    t.deepEqual(pick(data, function(val, key) {
        return this[key] === 3 && this === instance;
    }, instance), {c: 3}, 'function is given context');
    t.end();
});
