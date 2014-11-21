var test = require('tape');
var keys = require('./keys');


test('amp-keys', function (t) {
    t.deepEqual(keys({one : 1, two : 2}), ['one', 'two'], 'can extract the keys from an object');
    // the test above is not safe because it relies on for-in enumeration order
    var a = []; a[1] = 0;
    t.deepEqual(keys(a), ['1'], 'is not fooled by sparse arrays; see issue #95');
    t.deepEqual(keys(null), []);
    t.deepEqual(keys(void 0), []);
    t.deepEqual(keys(1), []);
    t.deepEqual(keys('a'), []);
    t.deepEqual(keys(true), []);

    // keys that may be missed if the implementation isn't careful
    var trouble = {
      'constructor': Object,
      'valueOf': function () {},
      'hasOwnProperty': null,
      'toString': 5,
      'toLocaleString': undefined,
      'propertyIsEnumerable': /a/,
      'isPrototypeOf': this,
      '__defineGetter__': Boolean,
      '__defineSetter__': {},
      '__lookupSetter__': false,
      '__lookupGetter__': []
    };
    var troubleKeys = ['constructor', 'valueOf', 'hasOwnProperty', 'toString', 'toLocaleString', 'propertyIsEnumerable',
                  'isPrototypeOf', '__defineGetter__', '__defineSetter__', '__lookupSetter__', '__lookupGetter__'].sort();
    t.deepEqual(keys(trouble).sort(), troubleKeys, 'matches non-enumerable properties');
    t.end();
});
