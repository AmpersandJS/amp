var test = require('tape');
var uniqueId = require('./unique-id');


test('amp-unique-id', function (t) {
    var ids = [], i = 0;
    while (i++ < 5) ids.push(uniqueId());
    i = 0;
    while (i++ < 5) ids.push(uniqueId('p'));
    t.deepEqual(ids, ['1', '2', '3', '4', '5', 'p6', 'p7', 'p8', 'p9', 'p10'], 'generates globally-unique ids with prefix');

    t.end();
});
