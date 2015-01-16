var test = require('tape');
var pluck = require('./pluck');


test('amp-pluck', function (t) {
    var items = [{name: 'Cog', price: 100}, {name: 'Sprocket', price: 99}];

    t.deepEqual(pluck(items, 'name'), ['Cog', 'Sprocket'], 'pulls names out of objects');
    
    // this is written this way because IE does weird things
    // with array literals that are declared with undefineds
    // [undefined, undefined]
    var expected = [];
    expected.push(undefined, undefined);
    t.deepEqual(pluck(items, 'height'), expected, 'pulls height out of objects');
    
    t.end();
});
