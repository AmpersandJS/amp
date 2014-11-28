/*global String*/
var test = require('tape');
var isObjectEqual = require('./is-object-equal');


test('amp-is-object-equal', function (t) {
    function First() {
      this.value = 1;
    }
    First.prototype.value = 1;
    function Second() {
      this.value = 1;
    }
    Second.prototype.value = 2;

    // Basic equality and identity comparisons.
    t.ok(isObjectEqual(null, null), '`null` is equal to `null`');
    t.ok(isObjectEqual(), '`undefined` is equal to `undefined`');

    t.ok(!isObjectEqual(0, -0), '`0` is not equal to `-0`');
    t.ok(!isObjectEqual(-0, 0), 'Commutative equality is implemented for `0` and `-0`');
    t.ok(!isObjectEqual(null, undefined), '`null` is not equal to `undefined`');
    t.ok(!isObjectEqual(undefined, null), 'Commutative equality is implemented for `null` and `undefined`');

    // String object and primitive comparisons.
    t.ok(isObjectEqual('Curly', 'Curly'), 'Identical string primitives are equal');
    t.ok(isObjectEqual(new String('Curly'), new String('Curly')), 'String objects with identical primitive values are equal');
    t.ok(isObjectEqual(new String('Curly'), 'Curly'), 'String primitives and their corresponding object wrappers are equal');
    t.ok(isObjectEqual('Curly', new String('Curly')), 'Commutative equality is implemented for string objects and primitives');

    t.ok(!isObjectEqual('Curly', 'Larry'), 'String primitives with different values are not equal');
    t.ok(!isObjectEqual(new String('Curly'), new String('Larry')), 'String objects with different primitive values are not equal');
    t.ok(!isObjectEqual(new String('Curly'), {toString: function(){ return 'Curly'; }}), 'String objects and objects with a custom `toString` method are not equal');

    // Number object and primitive comparisons.
    t.ok(isObjectEqual(75, 75), 'Identical number primitives are equal');
    t.ok(isObjectEqual(new Number(75), new Number(75)), 'Number objects with identical primitive values are equal');
    t.ok(isObjectEqual(75, new Number(75)), 'Number primitives and their corresponding object wrappers are equal');
    t.ok(isObjectEqual(new Number(75), 75), 'Commutative equality is implemented for number objects and primitives');
    t.ok(!isObjectEqual(new Number(0), -0), '`new Number(0)` and `-0` are not equal');
    t.ok(!isObjectEqual(0, new Number(-0)), 'Commutative equality is implemented for `new Number(0)` and `-0`');

    t.ok(!isObjectEqual(new Number(75), new Number(63)), 'Number objects with different primitive values are not equal');
    t.ok(!isObjectEqual(new Number(63), {valueOf: function(){ return 63; }}), 'Number objects and objects with a `valueOf` method are not equal');

    // Comparisons involving `NaN`.
    t.ok(isObjectEqual(NaN, NaN), '`NaN` is equal to `NaN`');
    t.ok(isObjectEqual(new Object(NaN), NaN), 'Object(`NaN`) is equal to `NaN`');
    t.ok(!isObjectEqual(61, NaN), 'A number primitive is not equal to `NaN`');
    t.ok(!isObjectEqual(new Number(79), NaN), 'A number object is not equal to `NaN`');
    t.ok(!isObjectEqual(Infinity, NaN), '`Infinity` is not equal to `NaN`');

    // Boolean object and primitive comparisons.
    t.ok(isObjectEqual(true, true), 'Identical boolean primitives are equal');
    t.ok(isObjectEqual(new Boolean, new Boolean), 'Boolean objects with identical primitive values are equal');
    t.ok(isObjectEqual(true, new Boolean(true)), 'Boolean primitives and their corresponding object wrappers are equal');
    t.ok(isObjectEqual(new Boolean(true), true), 'Commutative equality is implemented for booleans');
    t.ok(!isObjectEqual(new Boolean(true), new Boolean), 'Boolean objects with different primitive values are not equal');

    // Common type coercions.
    t.ok(!isObjectEqual(new Boolean(false), true), '`new Boolean(false)` is not equal to `true`');
    t.ok(!isObjectEqual('75', 75), 'String and number primitives with like values are not equal');
    t.ok(!isObjectEqual(new Number(63), new String(63)), 'String and number objects with like values are not equal');
    t.ok(!isObjectEqual(75, '75'), 'Commutative equality is implemented for like string and number values');
    t.ok(!isObjectEqual(0, ''), 'Number and string primitives with like values are not equal');
    t.ok(!isObjectEqual(1, true), 'Number and boolean primitives with like values are not equal');
    t.ok(!isObjectEqual(new Boolean(false), new Number(0)), 'Boolean and number objects with like values are not equal');
    t.ok(!isObjectEqual(false, new String('')), 'Boolean primitives and string objects with like values are not equal');
    t.ok(!isObjectEqual(12564504e5, new Date(2009, 9, 25)), 'Dates and their corresponding numeric primitive values are not equal');

    // Dates.
    t.ok(isObjectEqual(new Date(2009, 9, 25), new Date(2009, 9, 25)), 'Date objects referencing identical times are equal');
    t.ok(!isObjectEqual(new Date(2009, 9, 25), new Date(2009, 11, 13)), 'Date objects referencing different times are not equal');
    t.ok(!isObjectEqual(new Date(2009, 11, 13), {
      getTime: function(){
        return 12606876e5;
      }
    }), 'Date objects and objects with a `getTime` method are not equal');
    t.ok(!isObjectEqual(new Date('Curly'), new Date('Curly')), 'Invalid dates are not equal');

    // Functions.
    t.ok(!isObjectEqual(First, Second), 'Different functions with identical bodies and source code representations are not equal');

    // RegExps.
    t.ok(isObjectEqual(/(?:)/gim, /(?:)/gim), 'RegExps with equivalent patterns and flags are equal');
    t.ok(isObjectEqual(/(?:)/gi, /(?:)/ig), 'Flag order is not significant');
    t.ok(!isObjectEqual(/(?:)/g, /(?:)/gi), 'RegExps with equivalent patterns and different flags are not equal');
    t.ok(!isObjectEqual(/Moe/gim, /Curly/gim), 'RegExps with different patterns and equivalent flags are not equal');
    t.ok(!isObjectEqual(/(?:)/gi, /(?:)/g), 'Commutative equality is implemented for RegExps');
    t.ok(!isObjectEqual(/Curly/g, {source: 'Larry', global: true, ignoreCase: false, multiline: false}), 'RegExps and RegExp-like objects are not equal');

    // Empty arrays, array-like objects, and object literals.
    t.ok(isObjectEqual({}, {}), 'Empty object literals are equal');
    t.ok(isObjectEqual([], []), 'Empty array literals are equal');
    t.ok(isObjectEqual([{}], [{}]), 'Empty nested arrays and objects are equal');
    t.ok(!isObjectEqual({length: 0}, []), 'Array-like objects and arrays are not equal.');
    t.ok(!isObjectEqual([], {length: 0}), 'Commutative equality is implemented for array-like objects');

    t.ok(!isObjectEqual({}, []), 'Object literals and array literals are not equal');
    t.ok(!isObjectEqual([], {}), 'Commutative equality is implemented for objects and arrays');

    // Arrays with primitive and object values.
    t.ok(isObjectEqual([1, 'Larry', true], [1, 'Larry', true]), 'Arrays containing identical primitives are equal');
    t.ok(isObjectEqual([/Moe/g, new Date(2009, 9, 25)], [/Moe/g, new Date(2009, 9, 25)]), 'Arrays containing equivalent elements are equal');

    // Multi-dimensional arrays.
    var a = [new Number(47), false, 'Larry', /Moe/, new Date(2009, 11, 13), ['running', 'biking', new String('programming')], {a: 47}];
    var b = [new Number(47), false, 'Larry', /Moe/, new Date(2009, 11, 13), ['running', 'biking', new String('programming')], {a: 47}];
    t.ok(isObjectEqual(a, b), 'Arrays containing nested arrays and objects are recursively compared');

    // Overwrite the methods defined in ES 5.1 section 15.4.4.
    a.forEach = a.map = a.filter = a.every = a.indexOf = a.lastIndexOf = a.some = a.reduce = a.reduceRight = null;
    b.join = b.pop = b.reverse = b.shift = b.slice = b.splice = b.concat = b.sort = b.unshift = null;

    // Array elements and properties.
    t.ok(isObjectEqual(a, b), 'Arrays containing equivalent elements and different non-numeric properties are equal');
    a.push('White Rocks');
    t.ok(!isObjectEqual(a, b), 'Arrays of different lengths are not equal');
    a.push('East Boulder');
    b.push('Gunbarrel Ranch', 'Teller Farm');
    t.ok(!isObjectEqual(a, b), 'Arrays of identical lengths containing different elements are not equal');

    // Sparse arrays.
    t.ok(isObjectEqual(Array(3), Array(3)), 'Sparse arrays of identical lengths are equal');
    t.ok(!isObjectEqual(Array(3), Array(6)), 'Sparse arrays of different lengths are not equal when both are empty');

    var sparse = [];
    sparse[1] = 5;
    t.ok(isObjectEqual(sparse, [undefined, 5]), 'Handles sparse arrays as dense');

    // Simple objects.
    t.ok(isObjectEqual({a: 'Curly', b: 1, c: true}, {a: 'Curly', b: 1, c: true}), 'Objects containing identical primitives are equal');
    t.ok(isObjectEqual({a: /Curly/g, b: new Date(2009, 11, 13)}, {a: /Curly/g, b: new Date(2009, 11, 13)}), 'Objects containing equivalent members are equal');
    t.ok(!isObjectEqual({a: 63, b: 75}, {a: 61, b: 55}), 'Objects of identical sizes with different values are not equal');
    t.ok(!isObjectEqual({a: 63, b: 75}, {a: 61, c: 55}), 'Objects of identical sizes with different property names are not equal');
    t.ok(!isObjectEqual({a: 1, b: 2}, {a: 1}), 'Objects of different sizes are not equal');
    t.ok(!isObjectEqual({a: 1}, {a: 1, b: 2}), 'Commutative equality is implemented for objects');
    t.ok(!isObjectEqual({x: 1, y: undefined}, {x: 1, z: 2}), 'Objects with identical keys and different values are not equivalent');

    // `A` contains nested objects and arrays.
    a = {
      name: new String('Moe Howard'),
      age: new Number(77),
      stooge: true,
      hobbies: ['acting'],
      film: {
        name: 'Sing a Song of Six Pants',
        release: new Date(1947, 9, 30),
        stars: [new String('Larry Fine'), 'Shemp Howard'],
        minutes: new Number(16),
        seconds: 54
      }
    };

    // `B` contains equivalent nested objects and arrays.
    b = {
      name: new String('Moe Howard'),
      age: new Number(77),
      stooge: true,
      hobbies: ['acting'],
      film: {
        name: 'Sing a Song of Six Pants',
        release: new Date(1947, 9, 30),
        stars: [new String('Larry Fine'), 'Shemp Howard'],
        minutes: new Number(16),
        seconds: 54
      }
    };
    t.ok(isObjectEqual(a, b), 'Objects with nested equivalent members are recursively compared');

    // Instances.
    t.ok(isObjectEqual(new First, new First), 'Object instances are equal');
    t.ok(!isObjectEqual(new First, new Second), 'Objects with different constructors and identical own properties are not equal');
    t.ok(!isObjectEqual({value: 1}, new First), 'Object instances and objects sharing equivalent properties are not equal');
    t.ok(!isObjectEqual({value: 2}, new Second), 'The prototype chain of objects should not be examined');

    // Circular Arrays.
    (a = []).push(a);
    (b = []).push(b);
    t.ok(isObjectEqual(a, b), 'Arrays containing circular references are equal');
    a.push(new String('Larry'));
    b.push(new String('Larry'));
    t.ok(isObjectEqual(a, b), 'Arrays containing circular references and equivalent properties are equal');
    a.push('Shemp');
    b.push('Curly');
    t.ok(!isObjectEqual(a, b), 'Arrays containing circular references and different properties are not equal');

    // More circular arrays #767.
    a = ['everything is checked but', 'this', 'is not'];
    a[1] = a;
    b = ['everything is checked but', ['this', 'array'], 'is not'];
    t.ok(!isObjectEqual(a, b), 'Comparison of circular references with non-circular references are not equal');

    // Circular Objects.
    a = {abc: null};
    b = {abc: null};
    a.abc = a;
    b.abc = b;
    t.ok(isObjectEqual(a, b), 'Objects containing circular references are equal');
    a.def = 75;
    b.def = 75;
    t.ok(isObjectEqual(a, b), 'Objects containing circular references and equivalent properties are equal');
    a.def = new Number(75);
    b.def = new Number(63);
    t.ok(!isObjectEqual(a, b), 'Objects containing circular references and different properties are not equal');

    // More circular objects #767.
    a = {everything: 'is checked', but: 'this', is: 'not'};
    a.but = a;
    b = {everything: 'is checked', but: {that: 'object'}, is: 'not'};
    t.ok(!isObjectEqual(a, b), 'Comparison of circular references with non-circular object references are not equal');

    // Cyclic Structures.
    a = [{abc: null}];
    b = [{abc: null}];
    (a[0].abc = a).push(a);
    (b[0].abc = b).push(b);
    t.ok(isObjectEqual(a, b), 'Cyclic structures are equal');
    a[0].def = 'Larry';
    b[0].def = 'Larry';
    t.ok(isObjectEqual(a, b), 'Cyclic structures containing equivalent properties are equal');
    a[0].def = new String('Larry');
    b[0].def = new String('Curly');
    t.ok(!isObjectEqual(a, b), 'Cyclic structures containing different properties are not equal');

    // Complex Circular References.
    a = {foo: {b: {foo: {c: {foo: null}}}}};
    b = {foo: {b: {foo: {c: {foo: null}}}}};
    a.foo.b.foo.c.foo = a;
    b.foo.b.foo.c.foo = b;
    t.ok(isObjectEqual(a, b), 'Cyclic structures with nested and identically-named properties are equal');

    // Objects without a `constructor` property
    if (Object.create) {
        a = Object.create(null, {x: {value: 1, enumerable: true}});
        b = {x: 1};
        t.ok(isObjectEqual(a, b), 'Handles objects without a constructor (e.g. from Object.create');
    }

    function Foo() { this.a = 1; }
    Foo.prototype.constructor = null;

    var other = {a: 1};
    t.strictEqual(isObjectEqual(new Foo, other), false, 'Objects from different constructors are not equal');
    t.end();
});
