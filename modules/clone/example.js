var clone = require('amp-clone');

var original = {name: 'henrik'};
var copy = clone(original); //=> {name: 'henrik'}
console.log(original === copy); //=> false

var array = ['hi', 'there'];
var copied = clone(array); //=> ['hi', 'there']
console.log(array === copied); //=> false
