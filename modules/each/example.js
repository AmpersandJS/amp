var each = require('amp-each');

var list = ['oh', 'hello', 'there'];
var obj = {name: 'Henrik', greeting: 'Oh, hello there!'};

each(list, function (item, index) {
    console.log(item, index);
});
//=> 'oh', 0
//=> 'hi', 1
//=> 'there', 2

each(obj, function (value, key) {
    console.log(value, key);
});
//=> 'Henrik', 'name'
//=> 'Oh, hello there!', 'greeting'

// with a context
var myContext = {thing: 'stuff'};

each([1, 2], function () {
    console.log(this);
}, myContext);
//=> {thing: 'stuff'}
//=> {thing: 'stuff'}
