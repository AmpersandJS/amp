var before = require('amp-before');

var timesCalled = 0;
var getCount = function () {
    return ++timesCalled;
}
var modified = before(3, getCount); //=> returns modified function

console.log(modified()); //=> 1
console.log(modified()); //=> 2
console.log(modified()); //=> 2
