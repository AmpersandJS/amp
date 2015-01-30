var sortedIndex = require('amp-sorted-index');

//Using native compare
var items = [1,3,5,7]; //Already sorted
sortedIndex(items, 2); //=> 1

//Using string comparator
var people = [
    {name: 'Robert', rank: 2},
    {name: 'Sally', rank: 4}
]; //Already sorted by rank

var pat = {name: 'Pat', rank: 1};

sortedIndex(people, pat, 'rank'); //=> 0

//Using function comparator
function nameLength(person) {
    return person.name.length;
}

var people = [
    {name: 'Pat', rank: 1},
    {name: 'Robert', rank: 2}
]; //Already sorted by name length

var sally = {name: 'Sally', rank: 4};

sortedIndex(people, sally, nameLength); //=> 2
