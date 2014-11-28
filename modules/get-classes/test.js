var test = require('tape');
var getClasses = require('./get-classes');


function getEl(className) {
    var div = document.createElement('div');
    div.className = className;
    return div;
}

test('amp-get-classes', function (t) {
    var el = getEl('oh hello there');

    t.deepEqual(getClasses(el), ['oh', 'hello', 'there'], 'basic functionality');
    
    el = getEl('');
    t.deepEqual(getClasses(el), [], 'should handle empty string');

    el = getEl('    oh hello  there');
    t.deepEqual(getClasses(el), ['oh', 'hello', 'there'], 'should handle weird whitespacing');

    t.end();
});
