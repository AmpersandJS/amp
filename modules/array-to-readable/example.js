var arrayToReadable = require('amp-array-to-readable');

arrayToReadable([1, 2, 3]); //=> '1, 2, and 3'
arrayToReadable([1, 2]); //=> '1 and 2'
arrayToReadable([1]); //=> '1'

var words = ['one', 'two', 'three'];

arrayToReadable(words); //=> 'one, two, and three'
arrayToReadable(words, {conjunction: 'or'}); //=> 'one, two, or three'
arrayToReadable(words, {oxford: false}); //=> 'one, two and three'
