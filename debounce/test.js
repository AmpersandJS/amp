var test = require('tape');
var debounce = require('./debounce');
var delay = require('../delay');


test('amp-debounce', function (t) {
    t.plan(1);
    var counter = 0;
    var incr = function () {
        counter++;
    };
    var debouncedIncr = debounce(incr, 32);
    debouncedIncr();
    debouncedIncr();
    delay(debouncedIncr, 16);
    delay(function () {
        t.equal(counter, 1, 'incr was debounced');
        t.end();
    }, 96);
});

/*

test('debounce asap', function (t) {
    t.plan(4);
    var a, b;
    var counter = 0;
    var incr = function () {
        return ++counter;
    };
    var debouncedIncr = debounce(incr, 64, true);
    a = debouncedIncr();
    b = debouncedIncr();
    t.equal(a, 1);
    t.equal(b, 1);
    t.equal(counter, 1, 'incr was called immediately');
    delay(debouncedIncr, 16);
    delay(debouncedIncr, 32);
    delay(debouncedIncr, 48);
    delay(function(){
        t.equal(counter, 1, 'incr was debounced');
        t.end();
    }, 128);
});

test('debounce asap recursively', function (t) {
    t.plan(2);
    var counter = 0;
    var debouncedIncr = debounce(function(){
        counter++;
        if (counter < 10) debouncedIncr();
    }, 32, true);
    debouncedIncr();
    t.equal(counter, 1, 'incr was called immediately');
    delay(function(){
        t.equal(counter, 1, 'incr was debounced');
        t.end();
    }, 96);
});

test('debounce after system time is set backwards', function (t) {
    t.plan(2);
    var counter = 0;
    var origNowFunc = Date.now;
    var debouncedIncr = debounce(function () {
        counter++;
    }, 100, true);

    debouncedIncr();
    t.equal(counter, 1, 'incr was called immediately');

    var newNow = function () {
        return new Date(2013, 0, 1, 1, 1, 1);
    };

    delay(function() {
        debouncedIncr();
        t.equal(counter, 2, 'incr was debounced successfully');
        t.end();
        newNow = origNowFunc;
    }, 200);
});

test('debounce re-entrant', function (t) {
    t.plan(2);
    var sequence = [
        ['b1', 'b2']
    ];
    var value = '';
    var debouncedAppend;
    var append = function(arg){
        value += this + arg;
        var args = sequence.pop();
        if (args) {
            debouncedAppend.call(args[0], args[1]);
        }
    };
    debouncedAppend = debounce(append, 32);
    debouncedAppend.call('a1', 'a2');
    t.equal(value, '');
    delay(function(){
        t.equal(value, 'a1a2b1b2', 'append was debounced successfully');
        t.end();
    }, 100);
});
*/
