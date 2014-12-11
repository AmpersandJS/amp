var reject = require('amp-reject');

reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }); //[1, 3, 5]

reject([{a: 1, b: 2}, {a: 2, b: 2}, {a: 1, b: 3}, {a: 1, b: 4}], {a: 1}); //[{a: 2, b: 2}]

