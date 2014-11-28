var map = require('amp-map');

var array = ['oh', 'hello', 'there'];

var result = map(array, function (item, index) {
    console.log(item, index);
    return item.length;
});
//=> 'oh', 0
//=> 'hello', 1
//=> 'there', 2
console.log(result); //=> [2, 5, 5]

// also works on objects
var obj = {
    name: 'swede',
    greeting: 'hej'
};

result = map(obj, function (value, key) {
    console.log(value, key);
    return value.length;
});
//=> 'swede', 'name'
//=> 'hej', 'greeting'
console.log(result); //=> [5, 3]
