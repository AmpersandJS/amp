var unique = require('amp-unique');

unique([1, 4, 2, 4, 3]); //=> [1, 4, 2, 3]

// if sorted, you can speed things up
unique([1, 1, 2, 3, 4, 4, 5], true); //=> [1, 2, 3, 4, 5]

// getting unique objects checking a property value in list
// of objects also works
var people = [
    {name: 'sue'},
    {name: 'max'},
    {name: 'sue'}
};

// can just pass name of property as string
unique(people, 'name');
//=> [
//=>   {name: 'sue'},
//=>   {name: 'max'}
//=> ]

// You can use your own iterator, just return
// value to use to check uniqueness
unique(people, function (person) {
    return person.name;
});
//=> [
//=>   {name: 'sue'},
//=>   {name: 'max'}
//=> ]
