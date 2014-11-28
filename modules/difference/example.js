var difference = require('amp-difference');

difference([1, 2, 3, 4, 5], [1, 2]); //=> [3, 4, 5]

// can also pass multiple
difference([1, 2, 3, 4, 5], [1, 2], [3]); //=> [4, 5]
