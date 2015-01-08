var test = require('tape');
var toggleClass = require('./toggle-class');


function getEl(className) {
    var div = document.createElement('div');
    div.className = className;
    return div;
}

test('amp-toggle-class', function (t) {
    var el = getEl('oh');

    toggleClass(el, 'oh');
    t.equal(el.className, '', 'removes if present without condition passed');   
    toggleClass(el, 'oh');
    t.equal(el.className, 'oh', 'puts it back when called again');   
    
    el = getEl('oh');    
    toggleClass(el, 'oh', true);
    t.equal(el.className, 'oh', 'should leave it alone if condition is boolean true and class is already present');

    el = getEl('oh');    
    toggleClass(el, 'hi', true);
    t.equal(el.className, 'oh hi', 'should add class if condition is boolean true');
    
    el = getEl('');
    toggleClass(el, 'oh', false);
    t.equal(el.className, '', 'should not remove class if not present and condition is false');

    el = getEl('oh');
    toggleClass(el, 'oh', false);
    t.equal(el.className, '', 'should remove class if condition is boolean false');

    // toggling with condition as a booleans
    el = getEl('oh');
    toggleClass(el, 'hi', function (element) {
        t.equal(el, element, 'should pass element to a condition function');
        return 1 + 1 === 2;
    });
    t.equal(el.className, 'oh hi', 'should add class if condition is a function returning true');

    el = getEl('oh');
    toggleClass(el, 'oh', function (element) {
        t.equal(el, element, 'should pass element to a condition function');
        return 1 + 1 === 1;
    });
    t.equal(el.className, '', 'should remove class if condition is a function returning false');

    var nonsense = [undefined, null, NaN, 0, ''];

    for (var i = 0, l = nonsense.length; i < l; i++) {
        el = getEl('ok')
        toggleClass(el, nonsense[i]);
        t.equal(el.className, 'ok', 'should be reasonably tolerant of nonsense');
    }
    
    el = getEl('   oh    hello  there  ');
    var clsName = el.className;
    t.equal(clsName, toggleClass(el, 'hello', true).className, 'should not touch classNames if not modifying');
    
    // toggling with conditions
    el = getEl('oh');
    t.equal(el, toggleClass(el, 'hi', true), 'should always return element');
    el = getEl('oh');
    t.equal(el, toggleClass(el, 'hi', false), 'should always return element');

    // toggling without conditions
    el = getEl('oh');
    t.equal(el, toggleClass(el, 'oh'), 'should always return element');
    el = getEl('oh');
    t.equal(el, toggleClass(el, 'hi'), 'should always return element');

    t.end();
});
