var addClass = require('amp-add-class');

var element = document.querySelector('#my-el');
element.outerHTML; //=> '<div>greetings</div>';

// basic adding
addClass(element, 'oh');
element.outerHTML; //=> '<div class="oh">greetings</div>';

// adding an existing class does nothing
addClass(element, 'oh'); 

// add multiple at once
addClass(element, 'hello', 'there'); 
element.outerHTML; //=> '<div class="oh hello there">greetings</div>';

// using array
addClass(element, ['foo', 'bar']); 
element.outerHTML; //=> '<div class="oh hello there foo bar">greetings</div>';

// add multiple at once with space-separated string
addClass(element, 'baz boo'); 
element.outerHTML; //=> '<div class="oh hello there baz boo">greetings</div>';
