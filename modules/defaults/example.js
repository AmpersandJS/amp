var defaults = require('amp-defaults');

var person = {
    name: 'Joe',
    favoriteColor: 'blue'
};

defaults(person, {
    height: 'unknown',
    age: 'unknown'
});

console.log(person);
//=>
// {
//   name: 'Joe',
//   favoriteColor: 'blue',
//   height: 'unknown',
//   age: 'unknown'
// }
