var negate = require('amp-negate');


negate(function() { return true; }); //=> false
negate(function() { return false; }); //=> true
