var once = require('amp-once');

var counter = 0;
var modified = once(function () {
    console.log('called!');
    return ++counter;
});

modified(); 
// logs out "called!"
//=> 1
// subsequent calls returns result from
// first without actually running again.
modified(); //=> 1
modified(); //=> 1
