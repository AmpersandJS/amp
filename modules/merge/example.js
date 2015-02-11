var merge = require('amp-merge');

var person = {
  nickname: 'The Swede'
};

var attributes = {
  greeting: 'Oh, hello there!'
};

var preferences = {
  food: 'Swedish Fish'
};

merge(person, attributes, preferences);
//=>
// {
//   nickname: 'The Swede',
//   greeting: 'Oh, hello there!',
//   food: 'Swedish Fish'
// }