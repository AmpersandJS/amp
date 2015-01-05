var capitalize = require('amp-capitalize');

capitalize('hi'); //=> 'Hi'

// does not trim or anything
capitalize(' hi'); //=> ' hi'

// pass `false` to force to lowercase instead
capitalize('Hi', false); //=> 'hi'
