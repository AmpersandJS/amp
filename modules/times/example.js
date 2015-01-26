var times = require('amp-times');

var timesCalled = 0;
var logCalls = function () {
    console.log(timesCalled);
    return ++timesCalled;
};

times(2, logCalls);
//=> 0
//=> 1
