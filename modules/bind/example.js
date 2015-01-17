var bind = require('amp-bind');

var obj = {};
var func = function (greeting, who) {
    console.log(greeting, who);    
    console.log(this === obj);
};

var bound = bind(func, obj, 'hello', 'there');

bound();
//=> 'hello there'
//=> true

//Can also act like a partial generator
var partial = bind(func, null, 'hello');

partial('again');
//=> 'hello again'
//=> false
