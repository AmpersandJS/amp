var getClasses = require('amp-get-classes');

var el = document.querySelector('#my-div');


el.outerHTML; //=> <div class="oh hello there">greetings!</div>
getClasses(el); //=> ['oh', 'hello', 'there']
