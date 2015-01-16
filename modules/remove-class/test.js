var test = require('tape');
var removeClass = require('./remove-class');


function getEl(className) {
    var div = document.createElement('div');
    div.className = className;
    return div;
}


test('amp-remove-class', function (t) {
    var el = getEl('oh hello there');
    
    removeClass(el, 'oh');
    t.equal(el.className, 'hello there');   
    
    removeClass(el, 'oh');
    t.equal(el.className, 'hello there', 'removing non-existant class should do nothing');   
    
    removeClass(el, 'hello', 'there');
    t.equal(el.className, '', 'should be able to remove several');   
    
    removeClass(el, 'oh', 'hello', 'there');
    t.equal(el.className, '', 'should be ok if doing again');

    // reset it
    el = getEl('oh hello there');

    removeClass(el, undefined, null, NaN, 0, '');
    t.equal(el.className, 'oh hello there', 'should be reasonably tolerant of nonsense');

    el = getEl('undefined null NaN');
    removeClass(el, undefined, null, NaN, 0, '');
    t.equal(el.className, 'undefined null NaN', 'should not remove classes named `undefined` etc.');

    el = getEl('oh hello there');
    t.equal(el.className, 'oh hello there');
    removeClass(el, ['oh', 'hello', 'there']);
    t.equal(el.className, '');

    el = getEl('  oh   hello there');
    var clsName = el.className;

    t.equal(clsName, removeClass(el, 'not', 'changing').className, 'should not touch classNames if not modifying');
    t.equal(removeClass(el, 'hello', 'yo').className, 'oh there', 'should clean up classNames whitespacing, if modifying anyway');

    el = removeClass(getEl('foobar'), 'foo', 'bar');
    t.equal(el.className, 'foobar');

    el = getEl('oh hello there');
    t.equal(removeClass(el, 'hello there').className, 'oh', 'should support space separated string of classes');

    el = getEl('oh hello there');
    t.equal(removeClass(el, '\r  hello \t \nthere  ').className, 'oh', 'should support other weird whitespace when using a string of classes');

    t.end();
});
