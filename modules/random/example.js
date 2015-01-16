var random = require('amp-random');

// call with min and max
random(3, 100); //=> 42 (sometimes)

// call with just a max
random(10); //=> 3 (return a number between `0` and `10`)
