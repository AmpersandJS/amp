var test = require('tape');
var sortedPush = require('./sorted-push');

test('amp-sorted-push', function (t) {
    var numbers = [1,3,5,7];
    sortedPush(2, numbers);
    t.equal(numbers.length, 5);
    t.equal(numbers[1], 2);

    var robert = {name: 'Robert', rank: 2};
    var sally = {name: 'Sally', rank: 4};
    var pat = {name: 'Pat', rank: 1};
    var people = [robert, sally];

    sortedPush(pat, people, 'rank');
    t.deepEqual(people, [pat, robert, sally]);

    people = [pat, robert];
    sortedPush(sally, people, function (person) { return person.name.length; });
    t.deepEqual(people, [pat, sally, robert]);
    t.end();
});
