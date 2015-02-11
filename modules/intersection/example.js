var intersection = require('amp-intersection');

intersection([1, 2, 3], [101, 2, 1, 10]);
//=> [1, 2]

//can take any number of arrays
intersection([1, 2, 3], [101, 2, 1, 10], [2, 1, 100]);
//=> [1, 2]
