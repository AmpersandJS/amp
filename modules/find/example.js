var find = require('amp-find');

var isEven = function(num){
    return num % 2 === 0;
};

find([1, 2, 3, 4], isEven); //=> 2

find([{a: 1, b: 2}, {a: 2, b: 2}, {a: 1, b: 3}, {a: 1, b: 4}], {a: 1}); //{a: 1, b: 2}
