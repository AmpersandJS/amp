var jump = require('amp-jump');


var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// basic case
jump(arr, 'a'); //=> 'b'
jump(arr, 'a', 3); //=> 'd'

// returns undefined if out of range
jump(arr, 'g'); //=> undefined

// negative jump values work fine
jump(arr, 'b', -1); //=> 'a'

// if you want to loop around, pass `true` as `loop` argument
jump(arr, 'a', -1, true); //=> 'g'
jump(arr, 'a', 7, true); //=> 'a'

// returns `undefined` if the item passed
// isn't found in the list at all
jump(arr, 'z'); //=> undefined
