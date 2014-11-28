var delay = require('amp-delay');

var sayHi = function (name) {
    console.log('Oh, hello there!');
};

delay(sayHi, 200);
//=> 200ms pause
//=> 'Oh, hello there!'

// with context
var obj = {
    name: 'Mr. Fox',
    someMethod: function () {
        // here we maintain context
        delay(this.otherMethod, 200, this);
    },
    otherMethod: function () {
        // now we can still access `this`
        console.log('Oh, hello there, ' + this.name + '!');
    }
};
//=> 200ms pause
//=> 'Oh, hello there, Mr. Fox!'
