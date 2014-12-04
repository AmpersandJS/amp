var toggleClass = require('amp-toggle-class');

var element = document.querySelector('#my-el');
element.outerHTML; //=> '<div>greetings</div>';

// if no condition, toggles based on presence
toggleClass(element, 'oh');
element.outerHTML; //=> '<div class="oh">greetings</div>';

// running again, will remove it
toggleClass(element, 'oh'); 
element.outerHTML; //=> '<div class="">greetings</div>';

// toggling based on condition
// the `condition` always wins.
// Here, the class is missing, 
// but condition is falsy
// so `toggleClass` does nothing.
toggleClass(element, 'oh', false); 
element.outerHTML; //=> '<div class="">greetings</div>';
