var test = require('tape');
var jump = require('./jump');


test('amp-jump', function (t) {
    var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

    var obj = {};
    t.equal(jump(obj), obj, 'should return passed value for non arrays');
    
    t.equal(jump(arr, 'x'), undefined, 'returns `undefined` if passed item not present');
    t.equal(jump(arr, 'a', -1), undefined, 'returns `undefined` if out of range low end');
    t.equal(jump(arr, 'a', 7), undefined, 'returns `undefined` if out of range on high end');

    t.equal(jump(arr, 'a'), 'b', '`jump` defaults to `1`');
    t.equal(jump(arr, 'a', 1), 'b', 'jumps work');
    t.equal(jump(arr, 'a', 3), 'd', 'jumps work');
    t.equal(jump(arr, 'c', -2), 'a', 'works for negative `jump`');

    // with loop argument
    t.equal(jump(arr, 'g', null, true), 'a', 'loops around to front if not given a jump');
    t.equal(jump(arr, 'g', 1, true), 'a', 'loops around to front');
    t.equal(jump(arr, 'g', 5, true), 'e', 'loops around to front with jumps');
    t.equal(jump(arr, 'g', 706, true), 'f', 'loops around to front with even larger jumps');
    
    t.equal(jump(arr, 'a', -1, true), 'g', 'loops around to back');
    t.equal(jump(arr, 'a', -5, true), 'c', 'loops around to back with slightly larger jumps');
    t.equal(jump(arr, 'a', -705, true), 'c', 'loops around to back with much larger jumps');
    
    t.equal(jump(arr, 'a', 0), 'a', 'should work for zero');
    t.equal(jump(arr, 'd', 0), 'd', 'should work for zero at any point');
    t.equal(jump(arr, 'g', 0), 'g', 'should work for zero at end');
    
    t.end();
});
