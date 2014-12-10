var test = require('tape');
var pluck = require('./pluck');

test('amp-pluck', function (t) {
    var items = [{name: 'Cog', price: 100}, {name: 'Sprocket', price: 99}];

    var names = pluck(items, 'name');

    t.deepEqual(names, ['Cog', 'Sprocket'], 'returns array of names');
    t.end();
});
