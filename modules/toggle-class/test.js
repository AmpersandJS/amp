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
    t.equal(el.className, 'oh', 'should leave it alone if condition is passed and class is already present');
    
    el = getEl('');
    toggleClass(el, 'oh', false);
    t.equal(el.className, '', 'should not add if not present but condition is false');

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
