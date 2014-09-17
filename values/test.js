var test = require('tape');
var pack = require('./package.json');
var values = require('./' + pack.main);


test('amp-values', function (t) {
    t.deepEqual(values({one: 1, two: 2}), [1, 2], 'can extract the values from an object');
    t.deepEqual(values({one: 1, two: 2, length: 3}), [1, 2, 3], 'works when one of them is "length"');
    t.end();
});
