var test = require('tape');
var createElement = require('./create-element');


test('amp-create-element', function (t) {
    var el;

    el = createElement('div', {stuff: 'yup', things: 'also yes'});

    // order doesn't matter
    var opt1 = '<div stuff="yup" things="also yes"></div>';
    var opt2 = '<div things="also yes" stuff="yup"></div>';

    t.ok(el.outerHTML === opt1 || el.outerHTML === opt2, 'should generate one of two options');

    el = createElement('ul', {'class': 'a', bool: true}, [
        createElement('li', 'ok'),
        createElement('li', 'now')
    ]);

    opt1 = '<ul class="a" bool=""><li>ok</li><li>now</li></ul>';
    opt2 = '<ul bool="" class="a"><li>ok</li><li>now</li></ul>';

    t.ok(el.outerHTML === opt1 || el.outerHTML === opt2, 'should support nesting');

    el = createElement('meta', {name: 'mobile-web-app-capable', content: 'yes'});

    opt1 = '<meta name="mobile-web-app-capable" content="yes">';
    opt2 = '<meta content="yes" name="mobile-web-app-capable">';

    t.ok(el.outerHTML === opt1 || el.outerHTML === opt2, 'supports meta tags');

    /*
    possible argument styles
    name
    name, text,
    name, text, attrs
    name, text, attrs, children
    name, text, children
    name, attrs
    name, attrs, children
    name, children
    */
    el = createElement('div');
    t.equal(el.outerHTML, '<div></div>');

    el = createElement('div', 'hi');
    t.equal(el.outerHTML, '<div>hi</div>');

    el = createElement('div', 'hi', {ok: 'stuff'});
    t.equal(el.outerHTML, '<div ok="stuff">hi</div>');

    el = createElement('div', 'hi', {ok: 'stuff'}, [createElement('p', 'ok')]);
    t.equal(el.outerHTML, '<div ok="stuff">hi<p>ok</p></div>');

    el = createElement('div', 'hi', {ok: 'stuff'}, [createElement('p', 'ok')]);
    t.equal(el.outerHTML, '<div ok="stuff">hi<p>ok</p></div>');

    el = createElement('div', 'hi', [createElement('p', 'ok')]);
    t.equal(el.outerHTML, '<div>hi<p>ok</p></div>');

    el = createElement('div', {ok: 'stuff'});
    t.equal(el.outerHTML, '<div ok="stuff"></div>');

    el = createElement('div', {ok: 'stuff'}, [createElement('p', 'ok')]);
    t.equal(el.outerHTML, '<div ok="stuff"><p>ok</p></div>');

    el = createElement('div', [createElement('p', 'ok'), createElement('p', 'ok2')]);
    t.equal(el.outerHTML, '<div><p>ok</p><p>ok2</p></div>');

    t.end();
});
