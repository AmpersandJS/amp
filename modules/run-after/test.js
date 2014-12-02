var test = require('tape');
var runAfter = require('./run-after');


test('amp-run-after', function (t) {
    var testAfter = function(afterAmount, timesCalled) {
        var afterCalled = 0;
        var after = runAfter(afterAmount, function() {
            afterCalled++;
        });
        while (timesCalled--) after();
        return afterCalled;
    };

    equal(testAfter(5, 5), 1, 'after(N) should fire after being called N times');
    equal(testAfter(5, 4), 0, 'after(N) should not fire unless called N times');
    equal(testAfter(0, 0), 0, 'after(0) should not fire immediately');
    equal(testAfter(0, 1), 1, 'after(0) should fire when first invoked');

    t.end();
});
