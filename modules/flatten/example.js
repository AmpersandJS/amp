var flatten = require('amp-flatten');


flatten([1, [2], [3, [[4]]]]);
//=> [1, 2, 3, 4];

flatten([1, [2], [3, [[4]]]], true);
//=> [1, 2, 3, [[4]]];
