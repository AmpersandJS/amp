var has = require('amp-has');

var obj = {
    greeting: 'Oh, hello there!'
};

has(obj, 'greeting'); //=> true
has(obj, 'hasOwnProperty'); //=> false
