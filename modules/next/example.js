var next = require('amp-next');

var arr = ['a', 'b', 'c'];

console.log(next(arr, 'a')); //=> b
console.log(next(arr, 'b')); //=> c

// when the last item of the array is specified to fetch the next item from the first item of the array will be returned
console.log(next(arr, 'c')); //=> a
