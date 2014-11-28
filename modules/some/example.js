var some = require('amp-some');

some([false, true]); //=> true

var isEven = function (num) {
    return num % 2 === 0;
};

some([1, 3, 6, 14], isEven); //=> true 
// the `14` would never be checked
// because `6` passes

