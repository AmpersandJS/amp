var property = require('amp-property');

var greetingGetter = property('greeting');
var person = {greeting: 'oh, hello!'};

greetingGetter(person); //=> 'oh, hello!'
