var debounce = require('amp-debounce');

var sayHi = function () {
    console.log('hi! <3');
};
var debouncedGreeting = debounce(sayHi, 200);

// will only run *once* and only 200ms after last call
debouncedGreeting();
debouncedGreeting();
debouncedGreeting();
debouncedGreeting();
// *200ms pass*
//=> 'hi'
