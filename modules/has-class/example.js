var hasClass = require('amp-has-class');

var el = document.querySelector('#my-div');

el.outerHTML; //=> <div class="oh hi">hello</div>

hasClass(el, 'oh'); //=> true
hasClass(el, 'no'); //=> false
hasClass(el, 'oh', 'hi'); //=> true
