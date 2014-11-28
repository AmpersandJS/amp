var extend = require('amp-extend');

var person = {
    nickname: 'The Swede'
};

var attributes = {
    greeting: 'Oh, hello there!'
};

var preferences = {
    food: 'Swedish Fish'
};

extend(person, attributes, preferences);
//=> 
// {
//   nickname: 'The Swede',
//   greeting: 'Oh, hello there!',
//   food: 'Swedish Fish'
// }
