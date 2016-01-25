var setAttribute = require('amp-set-attribute');

var div = document.create('div');

setAttribute(div, 'data-key', 42);
//=> <div data-key=42></div>

// removes attribute entirely
setAttribute(div, 'data-key', false);
//=> <div></div>

setAttribute(div, {class: 'active', thing: true});
//=> <div class="active" thing></div>

setAttribute(div, {class: false, thing: false});
//=> <div></div>
