var filter = require('amp-filter');

var isEven = function(num){
    return num % 2 === 0;
};

filter([1, 2, 3, 4], isEven); //=> [2, 4]
filter({one: 1, two: 2, three: 3, four: 4}, isEven); //=> [2, 4]

filter([{a: 1, b: 2}, {a: 2, b: 2}, {a: 1, b: 3}, {a: 1, b: 4}], {a: 1}); //[{a: 1, b: 2}, {a: 1, b: 3}, {a: 1, b: 4}]
