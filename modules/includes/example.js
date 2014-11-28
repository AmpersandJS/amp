var includes = require('amp-includes');

var myString = 'Oh, hello there!';

includes(myString, 'hello'); //=> true
includes(myString, 'hello', 10); //=> false
includes(myString, 'hi'); //=> false

