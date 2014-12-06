var removeClass = require('amp-remove-class');

var element = document.querySelector('#my-el');
element.outerHTML; //=> '<div class="oh hello there">greetings</div>';

removeClass(element, 'oh');
element.outerHTML; //=> '<div class="hello there">greetings</div>';

// remove multiple at once
removeClass(element, 'hello', 'there'); 
// can also be done by passing array
removeClass(element, ['hello', 'there']); 

element.outerHTML; //=> '<div class="">greetings</div>';
