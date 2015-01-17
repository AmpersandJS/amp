var reduce = require('amp-reduce');

var list = [1, 2, 3, 4];
var obj = {one: 1, two: 2, three: 3, four: 4};

var sumList = reduce(list, function(memo, value) {
	return memo + value;
});
// => 10

var sumObject = reduce(obj, function(memo, value, key) {
	return memo + obj[key];
});
// => 10
