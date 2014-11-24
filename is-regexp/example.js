var isRegexp = require('amp-is-regexp');

isRegexp(/oh hello there/); //=> true
isRegexp(new RegExp('oh hello there')); //=> true
