var toArray = require('amp-to-array');

(function(){ return toArray(arguments).slice(1); })(1, 2, 3, 4);// [2, 3, 4]
