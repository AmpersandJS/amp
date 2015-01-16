var pick = require('amp-pick');
var isNumber = require('amp-is-number');

pick({name: 'moe', age: 50, userid: 'moe1'}, 'name', 'age'); //=> {name: 'moe', age: 50}

pick({name: 'moe', age: 50, userid: 'moe1'}, function (value, key, object) {
    return isNumber(value);
}); //=> {age: 50}
