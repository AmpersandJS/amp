var test = require('tape');
var pack = require('./package.json');
var before = require('./' + pack.main);


test('amp-before', function (t) {
    var testBefore = function(beforeAmount, timesCalled) {
        var beforeCalled = 0;
        var beforedFunc = before(beforeAmount, function () {
            beforeCalled++;
        });
        while (timesCalled--) beforedFunc();
        return beforeCalled;
    };

    t.equal(testBefore(5, 5), 4, 'before(N) should not fire after being called N times');
    t.equal(testBefore(5, 4), 4, 'before(N) should fire before being called N times');
    t.equal(testBefore(0, 0), 0, 'before(0) should not fire immediately');
    t.equal(testBefore(0, 1), 0, 'before(0) should not fire when first invoked');

    var context = {num: 0};
    var increment = before(3, function () {
        return ++this.num;
    });

    // run it a bunch
    increment.call(context);
    increment.call(context);
    increment.call(context);
    increment.call(context);
    increment.call(context);

    t.equal(increment(), 2, 'stores a memo to the last value');
    t.equal(context.num, 2, 'provides context');
    t.end();
});
