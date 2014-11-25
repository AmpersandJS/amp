var isString = require('amp-is-string');

isString('oh, hello there!'); //=> true
isString(''); //=> true
isString(5); //=> false
