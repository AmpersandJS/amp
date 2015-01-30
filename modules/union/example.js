var union = require('amp-union');

union([1, 2, 3], [101, 2, 1, 10]);
//=> [1, 2, 3, 101, 10]

//can take any number of arrays
union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
//=> [1, 2, 3, 101, 10]
