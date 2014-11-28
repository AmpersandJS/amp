var test = require('tape');
var delay = require('./delay');


test('amp-delay', function (t) {
    t.plan(3);

    var obj = {
        init: function () {
            // here we maintain context
            delay(this.sayHi, 0, this);
        },
        sayHi: function () {
            t.equal(this, obj, 'maintains context');
        }
    };
    obj.init();

    var delayed = false;

    delay(function(){
        delayed = true;
    }, 100);
    setTimeout(function () {
        t.ok(!delayed, "didn't delay the function quite yet");
    }, 50);
    setTimeout(function () {
        t.ok(delayed, 'delayed the function');
        t.end();
    }, 150);
});
