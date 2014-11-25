var isNan = require('amp-is-nan');

isNan(NaN); //=> true
isNan(undefined); //=> false
isNan(0); //=> false
