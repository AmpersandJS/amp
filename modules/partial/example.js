var partial = require('amp-partial');

var add = function(a, b) { return a + b; };
add5 = partial(add, 5);
add5(10);
//=> 15


var cube = partial(Math.pow, partial, 3);

// Evaluates Math.pow(4, 3)
var x = cube(4);
//=> 64