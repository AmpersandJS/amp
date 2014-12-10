var test = require('tape');
var find = require('./find');

test('amp-find', function (t) {
    var evenArray = [1, 2, 3, 4, 5, 6];
    var evenObject = {one: 1, two: 2, three: 3, four: 4};

    var isEven = function(num){
        return num % 2 === 0;
    };

    t.equal(find(evenArray, isEven), 2, 'finds first even value');
    t.equal(find(evenObject, isEven), 2, 'can filter objects');

    find([1], function () {
        t.equal(this, evenObject, 'given context');
    }, evenObject);

    // Can be used like amp-find-where.
    var list = [
        {a: 1, b: 2},
        {a: 2, b: 2},
        {a: 1, b: 3},
        {a: 1, b: 4}
    ];

    t.deepEqual(find(list, {a: 1}), {a: 1, b: 2});

    t.end();
});
