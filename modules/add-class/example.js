var addClass = require('amp-add-class');

var element = document.querySelector('#my-el');

element.outerHTML; //=> '<div>greetings</div>';
addClass(element, 'oh');
element.outerHTML; //=> '<div class="oh">greetings</div>';

// adding an existing class does nothing
addClass(element, 'oh'); 

// add multiple at once
addClass(element, 'hello', 'there'); 
element.outerHTML; //=> '<div class="oh hello there">greetings</div>';
