var test = require('tape');
var sortedIndex = require('./sorted-index');


test('amp-sorted-index', function (t) {
    var numbers = [10, 20, 30, 40, 50], num = 35;
    var indexForNum = sortedIndex(numbers, num);
    t.equal(indexForNum, 3, '35 should be inserted at index 3');

    var indexFor30 = sortedIndex(numbers, 30);
    t.equal(indexFor30, 2, '30 should be inserted at index 2');

    var objects = [{x: 10}, {x: 20}, {x: 30}, {x: 40}];
    var iterator = function(obj){ return obj.x; };
    t.strictEqual(sortedIndex(objects, {x: 25}, iterator), 2);
    t.strictEqual(sortedIndex(objects, {x: 35}, 'x'), 3);

    var context = {1: 2, 2: 3, 3: 4};
    iterator = function(obj){ return this[obj]; };
    t.strictEqual(sortedIndex([1, 3], 2, iterator, context), 1);

    var values = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215, 33554431, 67108863, 134217727, 268435455, 536870911, 1073741823, 2147483647];
    var array = Array(Math.pow(2, 32) - 1);
    var length = values.length;
    while (length--) {
      array[values[length]] = values[length];
    }
    t.equal(sortedIndex(array, 2147483648), 2147483648, 'should work with large indexes');
    t.end();
});
