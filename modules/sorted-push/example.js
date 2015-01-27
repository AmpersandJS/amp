var sortedPush = require('amp-sorted-push');

//Using native compare
var items = [1,3,5,7]; //Already sorted
sortedPush(items, 2); //[1,2,3,5,7]


//Using string comparator
var people = [
    {name: 'Robert', rank: 2},
    {name: 'Sally', rank: 4}
]; //Already sorted by rank

var pat = {name: 'Pat', rank: 1};

sortedPush(people, pat, 'rank'); //[{name: 'Pat', rank:1}, {name: 'Robert', rank: 2}, {name: 'Sally', rank: 4}]


//Using function comparator
function nameLength(person) {
    return person.name.length;
}

var people = [
    {name: 'Pat', rank: 1},
    {name: 'Robert', rank: 2}
]; //Already sorted by name length

var sally = {name: 'Sally', rank: 4};

sortedPush(people, sally, nameLength); //[{name: 'Pat', rank: 1}, {name: 'Sally', rank: 4}, {name: 'Robert', rank: 2}]
