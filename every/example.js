var every = require('amp-every');

var isEven = function(num){
    return num % 2 === 0;
};

every([0, 10, 28], isEven); //=> true
every([0, 11, 28], isEven); //=> false
