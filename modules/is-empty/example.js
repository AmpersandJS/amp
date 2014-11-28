var isEmpty = require('amp-is-empty');

isEmpty({}); //=> true
isEmpty([]); //=> true
isEmpty(''); //=> true
isEmpty(0); //=> true
isEmpty(null); //=> true
isEmpty(undefined); //=> true
isEmpty(NaN); //=> true
