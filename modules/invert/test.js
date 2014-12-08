var test = require('tape');
var invert = require('./invert');
var keys = require('amp-keys');


test('amp-invert', function (t) {
    var obj = {first: 'Moe', second: 'Larry', third: 'Curly'};
    t.deepEqual(keys(invert(obj)), ['Moe', 'Larry', 'Curly'], 'can invert an object');
    t.deepEqual(invert(invert(obj)), obj, 'two inverts gets you back where you started');

    obj = {length: 3};
    t.equal(invert(obj)['3'], 'length', 'can invert an object with "length"');
    t.end();
});
