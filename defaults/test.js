var test = require('tape');
var pack = require('./package.json');
var isNaN = require('../is-nan');
var defaults = require('./' + pack.main);


test('amp-defaults', function (t) {
    var options = {zero: 0, one: 1, empty: '', nan: NaN, nothing: null};

    defaults(options, {zero: 1, one: 10, twenty: 20, nothing: 'str'});
    t.equal(options.zero, 0, 'value exists');
    t.equal(options.one, 1, 'value exists');
    t.equal(options.twenty, 20, 'default applied');
    t.equal(options.nothing, null, "null isn't overridden");

    defaults(options, {empty: 'full'}, {nan: 'nan'}, {word: 'word'}, {word: 'dog'});
    t.equal(options.empty, '', 'value exists');
    t.ok(isNaN(options.nan), "NaN isn't overridden");
    t.equal(options.word, 'word', 'new value is added, first one wins');

    try {
      options = {};
      defaults(options, null, undefined, {a: 1});
    } catch(ex) {}

    t.equal(options.a, 1, 'should not error on `null` or `undefined` sources');

    t.strictEqual(defaults(null, {a: 1}), null, 'result is null if destination is null');
    t.strictEqual(defaults(undefined, {a: 1}), undefined, 'result is undefined if destination is undefined');
    t.end();
});
