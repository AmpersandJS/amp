var invoke = require('amp-invoke');

var hello = function (name) {
    console.log('oh, hello ' + name);
};

var people = [
    { sayHi: hello },
    { sayHi: hello },
    { huh: 'i dont have that method' }
];

invoke(people, 'sayHi', 'there');
//=> oh, hello there
//=> oh, hello there
