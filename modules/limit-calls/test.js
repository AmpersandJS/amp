var test = require('tape');
var limitCalls = require('./limit-calls');


test('amp-limit-calls', function (t) {
    var testBefore = function(limit, timesToCall) {
        var called = 0;
        var modified = limitCalls(function () {
            called++;
        }, limit);
        while (timesToCall--) modified();
        return called;
    };

    t.equal(testBefore(5, 5), 5, 'limitCalls(N) should not fire after being called N times');
    t.equal(testBefore(5, 4), 4, 'limitCalls(N) should fire limitCalls being called N times');
    t.equal(testBefore(0, 0), 0, 'limitCalls(0) should not fire immediately');
    t.equal(testBefore(0, 1), 0, 'limitCalls(0) should not fire when first invoked');

    var context = {num: 0};
    var increment = limitCalls(function () {
        return ++this.num;
    }, 3);

    // run it a bunch
    increment.call(context);
    increment.call(context);
    increment.call(context);
    increment.call(context);
    increment.call(context);

    t.equal(increment(), 3, 'stores a memo to the last value');
    t.equal(context.num, 3, 'provides context');
    t.end();
});
