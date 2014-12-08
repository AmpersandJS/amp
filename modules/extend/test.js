var test = require('tape');
var extend = require('./extend');
var keys = require('amp-keys');


test('amp-extend', function(t) {
    var result;
    t.equal(extend({}, {a: 'b'}).a, 'b', 'can extend an object with the attributes of another');
    t.equal(extend({a: 'x'}, {a: 'b'}).a, 'b', 'properties in source override destination');
    t.equal(extend({x: 'x'}, {a: 'b'}).x, 'x', "properties not in source don't get overriden");
    result = extend({x: 'x'}, {a: 'a'}, {b: 'b'});
    t.deepEqual(result, {x: 'x', a: 'a', b: 'b'}, 'can extend from multiple source objects');
    result = extend({x: 'x'}, {a: 'a', x: 2}, {a: 'b'});
    t.deepEqual(result, {x: 2, a: 'b'}, 'extending from multiple source objects last property trumps');
    result = extend({}, {a: void 0, b: null});
    t.deepEqual(keys(result), ['a', 'b'], 'extend copies undefined values');

    var F = function() {};
    F.prototype = {a: 'b'};
    var subObj = new F();
    subObj.c = 'd';
    t.deepEqual(extend({}, subObj), {a: 'b', c: 'd'}, 'extend copies all properties from source');

    try {
      result = {};
      extend(result, null, undefined, {a: 1});
    } catch(ex) {}

    t.equal(result.a, 1, 'should not error on `null` or `undefined` sources');

    t.strictEqual(extend(null, {a: 1}), null, 'extending null results in null');
    t.strictEqual(extend(undefined, {a: 1}), undefined, 'extending undefined results in undefined');
    t.end();
});
