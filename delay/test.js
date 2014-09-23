var test = require('tape');
var pack = require('./package.json');
var delay = require('./' + pack.main);


test('amp-delay', function (t) {
    t.plan(2);
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
