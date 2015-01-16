var test = require('tape');
var pluck = require('./pluck');


test('amp-pluck', function (t) {
    var items = [{name: 'Cog', price: 100}, {name: 'Sprocket', price: 99}];

    t.deepEqual(pluck(items, 'name'), ['Cog', 'Sprocket'], 'pulls names out of objects');
    t.deepEqual(pluck(items, 'height'), [undefined, undefined], 'pulls height out of objects');
    t.end();
});
