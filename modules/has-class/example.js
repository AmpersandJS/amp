var hasClass = require('amp-has-class');

var el = document.querySelector('#my-div');

el.outerHTML; //=> <div class="oh hi">hello</div>

hasClass(el, 'oh'); //=> true
hasClass(el, 'no'); //=> false
hasClass(el, 'oh', 'hi'); //=> true

// also works with the string result of `el.className`
var className = el.className;

hasClass(className, 'oh'); //=> true
hasClass(className, 'no'); //=> false
hasClass(className, 'oh', 'hi'); //=> true
