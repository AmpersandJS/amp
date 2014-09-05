var test = require('tape');
var pack = require('./package.json');
var isNull = require('./' + pack.main);


test('isNull', function (t) {
    t.ok(!isNull(undefined), 'undefined is not null');
    t.ok(!isNull(NaN), 'NaN is not null');
    t.ok(isNull(null), 'but null is');
    t.end();
});
