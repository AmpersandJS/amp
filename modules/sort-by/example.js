var sortBy = require('amp-sort-by');

sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); }); //[5, 4, 6, 3, 1, 2]
