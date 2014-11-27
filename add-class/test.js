var test = require('tape');
var addClass = require('./add-class');


function getEl(className) {
    var div = document.createElement('div');
    div.className = className;
    return div;
}

test('amp-add-class', function (t) {
    var el = getEl('oh');
    
    addClass(el, 'oh');
    t.equal(el.className, 'oh');   
    
    addClass(el, 'oh');
    t.equal(el.className, 'oh', 'adding existing class should do nothing');   
    
    addClass(el, 'hello', 'there');
    t.equal(el.className, 'oh hello there', 'should be able to add several');   
    
    addClass(el, 'oh', 'hello', 'there');
    t.equal(el.className, 'oh hello there', 'should never add dupes');

    addClass(el, undefined, null, NaN, 0, '');
    t.equal(el.className, 'oh hello there', 'should be reasonably tolerant of nonsense');

    t.end();
});
