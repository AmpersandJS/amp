var test = require('tape');
var isEmpty = require('./is-empty');


test('amp-is-empty', function (t) {
    t.ok(!isEmpty([1]), '[1] is not empty');
    t.ok(isEmpty([]), '[] is empty');
    t.ok(!isEmpty({one : 1}), '{one : 1} is not empty');
    t.ok(isEmpty({}), '{} is empty');
    t.ok(isEmpty(new RegExp('')), 'objects with prototype properties are empty');
    t.ok(isEmpty(null), 'null is empty');
    t.ok(isEmpty(NaN), 'NaN is empty');
    t.ok(isEmpty(), 'undefined is empty');
    t.ok(isEmpty(''), 'the empty string is empty');
    t.ok(isEmpty(0), 'the number zero is empty');
    t.ok(!isEmpty(1), 'other numbers are not empty');
    t.ok(!isEmpty('moe'), 'but other strings are not');

    var obj = {one : 1};
    delete obj.one;
    t.ok(isEmpty(obj), 'deleting all the keys from an object empties it');

    var args = function(){ return arguments; };
    t.ok(isEmpty(args()), 'empty arguments object is empty');
    t.ok(!isEmpty(args('')), 'non-empty arguments object is not empty');
    t.end();
});
