var filter = require('amp-filter');

var isEven = function(num){ 
    return num % 2 === 0;
};

filter([1, 2, 3, 4], isEven); //=> [2, 4]
filter({one: 1, two: 2, three: 3, four: 4}, isEven); //=> [2, 4]
