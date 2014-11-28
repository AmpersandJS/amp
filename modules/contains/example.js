var contains = require('amp-contains');

console.log(contains(['hi'], 'hi')); //=> true

// with objects, keys don't matter it just looks value that matches
console.log(contains({hi: 'there'}, 'there')); //=> true
console.log(contains({hi: 'there'}, hi)); //=> false
