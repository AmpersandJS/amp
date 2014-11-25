var invert = require('amp-invert');

var person = {
    favoriteColor: 'magenta',
    favoriteFood: 'swedish pancakes'
};

invert(person);
//=> 
// { 
//   magenta: 'favoriteColor',
//   'swedish pancakes': 'favoriteFood'
// }
