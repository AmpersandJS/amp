var test = require('tape');
var each = require('./each');
var contains = require('amp-contains');


test('amp-each', function (t) {
    each([1, 2, 3], function(num, i) {
        t.equal(num, i + 1, 'each iterators provide value and iteration count');
    });

    var answers = [];
    each([1, 2, 3], function(num) {
        answers.push(num * this.multiplier);
    }, {multiplier : 5});
    t.deepEqual(answers, [5, 10, 15], 'context object property accessed');

    answers = [];
    each([1, 2, 3], function(num){ answers.push(num); });
    t.deepEqual(answers, [1, 2, 3], 'aliased as "forEach"');

    answers = [];
    var obj = {one : 1, two : 2, three : 3};
    obj.constructor.prototype.four = 4;
    each(obj, function(value, key){ answers.push(key); });
    t.deepEqual(answers, ['one', 'two', 'three'], 'iterating over objects works, and ignores the object prototype.');
    delete obj.constructor.prototype.four;

    var answer = null;
    each([1, 2, 3], function(num, index, arr){ if (contains(arr, num)) answer = true; });
    t.ok(answer, 'can reference the original collection from inside the iterator');

    answers = 0;
    each(null, function(){ ++answers; });
    t.equal(answers, 0, 'handles a null properly');

    each(false, function(){});

    var a = [1, 2, 3];
    t.strictEqual(each(a, function(){}), a);
    t.strictEqual(each(null, function(){}), null);

    var b = [1, 2, 3];
    b.length = 100;
    answers = 0;
    each(b, function(){ ++answers; });
    t.equal(answers, 100, 'enumerates [0, length)');


    var collection = [1, 2, 3], count = 0;
    each(collection, function() {
      if (count < 10) collection.push(count++);
    });
    t.equal(count, 3);

    collection = {a: 1, b: 2, c: 3};
    count = 0;
    each(collection, function() {
      if (count < 10) collection[count] = count++;
    });
    t.equal(count, 3);
    t.end();
});
