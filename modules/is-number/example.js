var isNumber = require('amp-is-number');

isNumber(5); //=> true
isNumber(Infinity); //=> true
isNumber('5'); //=> false
