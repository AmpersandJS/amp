var limitCalls = require('amp-limit-calls');

var timesCalled = 0;
var getCount = function () {
    return ++timesCalled;
}
var modified = before(getCount, 2); //=> returns modified function

console.log(modified()); //=> 1
console.log(modified()); //=> 2
console.log(modified()); //=> 2
