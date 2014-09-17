var test = require('tape');
var pack = require('./package.json');
var isNan = require('./' + pack.main);


test('amp-is-nan', function (t) {
    t.ok(!isNan(undefined), 'undefined is not NaN');
    t.ok(!isNan(null), 'null is not NaN');
    t.ok(!isNan(0), '0 is not NaN');
    t.ok(isNan(NaN), 'but NaN is');
    t.ok(isNan(new Number(NaN)), 'wrapped NaN is still NaN');
    t.end();
});
