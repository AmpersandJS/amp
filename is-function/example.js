var isFunction = require('amp-is-function');

isFunction(function () {}); //=> true
isFunction({}); //=> false
