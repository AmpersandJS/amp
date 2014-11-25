var isArray = require('amp-is-array');

isArray([]); //=> true
isArray([1, 2, 3]); //=> true
isArray(arguments); //=> false
