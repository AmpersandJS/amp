var test = require('tape');
var omit = require('./omit');


test('amp-omit', function (t) {
    var result;
    result = omit({a: 1, b: 2, c: 3}, 'b');
    t.deepEqual(result, {a: 1, c: 3}, 'can omit a single named property');
    result = omit({a: 1, b: 2, c: 3}, 'a', 'c');
    t.deepEqual(result, {b: 2}, 'can omit several named properties');
    result = omit({a: 1, b: 2, c: 3}, ['b', 'c']);
    t.deepEqual(result, {a: 1}, 'can omit properties named in an array');
    result = omit(['a', 'b'], 0);
    t.deepEqual(result, {1: 'b'}, 'can omit numeric properties');

    t.deepEqual(omit(null, 'a', 'b'), {}, 'non objects return empty object');
    t.deepEqual(omit(undefined, 'toString'), {}, 'null/undefined return empty object');
    t.deepEqual(omit(5, 'toString', 'b'), {}, 'returns empty object for primitives');

    var data = {a: 1, b: 2, c: 3};
    var callback = function(value, key, object) {
        t.strictEqual(key, {1: 'a', 2: 'b', 3: 'c'}[value]);
        t.strictEqual(object, data);
        return value !== this.value;
    };
    result = omit(data, callback, {value: 2});
    t.deepEqual(result, {b: 2}, 'can accept a predicate');

    var Obj = function(){};
    Obj.prototype = {a: 1, b: 2, c: 3};
    var instance = new Obj();
    t.deepEqual(omit(instance, 'b'), {a: 1, c: 3}, 'include prototype props');

    t.deepEqual(omit(data, function(val, key) {
        return this[key] === 3 && this === instance;
    }, instance), {a: 1, b: 2}, 'function is given context');
    t.end();
});
