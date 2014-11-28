var bind = require('amp-bind');

var obj = {};
var func = function (greeting, who) {
    console.log(greeting, who);    
    console.log(this === obj);
};

var bound = bind(func, object, 'hello', 'there');

bound();
//=> 'hello there'
//=> true
