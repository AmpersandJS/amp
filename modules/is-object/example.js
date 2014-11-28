var isObject = require('amp-is-object');

isObject({}); //=> true
isObject(null); //=> false
isObject('oh, hello there'); //=> false
isObject(['hi', 'there']); //=> true
// this is not something you'd normally do, but...
isObject(new String('hi')); //=> true

