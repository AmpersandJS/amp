var test = require('tape');
var invoke = require('./invoke');


test('amp-invoke', function (t) {
    var list = [[5, 1, 7], [3, 2, 1]];
    var result = invoke(list, 'sort');
    t.deepEqual(result[0], [1, 5, 7], 'first array sorted');
    t.deepEqual(result[1], [1, 2, 3], 'second array sorted');

    invoke([{
        method: function() {
            t.deepEqual([].slice.call(arguments), [1, 2, 3], 'called with arguments');
        }
    }], 'method', 1, 2, 3);

    var people = [
        {greeting: 'hi'},
        {greeting: 'there'}
    ];

    t.deepEqual(invoke(people, function () {
        return this.greeting;
    }), ['hi', 'there'], 'works when passed a function');

    t.deepEqual(invoke([{a: null}, {}, {a: function () {
        return 1; 
    }}], 'a'), [null, void 0, 1], 'handles null & undefined');

    t.end();
});
