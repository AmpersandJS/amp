var test = require('tape');
var pack = require('./package.json');
var isString = require('./' + pack.main);


test('amp-is-string', function (t) {
    t.ok(!isString({}), 'an object is not a string');
    t.ok(isString([1, 2, 3].join(', ')), 'but strings are');
    t.ok(isString('I am a string literal'), 'string literals are');
    var obj = new String('I am a string object');
    t.ok(isString(obj), 'so are String objects');
    t.end();
});
