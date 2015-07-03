var test = require('tape');
var setAttribute = require('./set-attribute');


function getEl() {
    return document.createElement('div');
}

test('amp-set-attribute', function (t) {
    var el = getEl();

    setAttribute(el, 'data-key', 42);
    t.equal(el.outerHTML, '<div data-key="42"></div>');

    setAttribute(el, 'data-key', false);
    t.equal(el.outerHTML, '<div></div>', 'removes property when passed false');

    el = getEl();
    setAttribute(el, {class: 'active', thing: true});

    // FF puts them in a different order
    var opt1 = '<div class="active" thing=""></div>';
    var opt2 = '<div thing="" class="active"></div>';
    t.ok(el.outerHTML === opt1 || el.outerHTML === opt2, 'supports objects');

    setAttribute(el, {class: false, thing: false});
    t.equal(el.outerHTML, '<div></div>', 'allows deletion via objects with false');

    el = getEl();
    setAttribute(el, {class: null, other: undefined, thing: NaN});

    opt1 = '<div class="" other="" thing=""></div>';
    opt2 = '<div thing="" other="" class=""></div>';
    opt3 = '<div thing="" other=""></div>';
    t.ok(el.outerHTML === opt1 || el.outerHTML === opt2 || el.outerHTML === opt3, 'does not set attributes to falsy values');

    el = getEl();
    setAttribute(el, {thing: 0, other: 47});

    opt1 = '<div thing="0" other="47"></div>';
    opt2 = '<div other="47" thing="0"></div>';
    t.ok(el.outerHTML === opt1 || el.outerHTML === opt2, 'handles numbers, including 0');

    input = document.createElement('input');
    setAttribute(input, {value: 'hello'});
    t.equal(input.outerHTML, '<input value="hello">', 'also sets value');
    t.equal(input.value, 'hello', 'also sets value');

    t.end();
});
