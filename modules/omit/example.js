var omit = require('amp-omit');
var isNumber = require('amp-is-number');


omit({name: 'moe', age: 50, userid: 'moe1'}, 'userid'); //=> {name: 'moe', age: 50}

omit({name: 'moe', age: 50, userid: 'moe1'}, function(value) {
    return isNumber(value);
}); //=> {name: 'moe', userid: 'moe1'}
