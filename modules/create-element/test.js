var test = require('tape');
var createElement = require('./create-element');


test('amp-create-element', function (t) {
    var el;

    el = createElement('div', {stuff: 'yup', things: 'also yes'});

    // order doesn't matter
    var opt1 = '<div stuff="yup" things="also yes"></div>';
    var opt2 = '<div things="also yes" stuff="yup" ></div>';
    t.ok(el.outerHTML === opt1 || el.outerHTML === opt2);

    el = createElement('ul', {'class': 'a', bool: true}, [
        createElement('li', 'ok'),
        createElement('li', 'now')
    ]);
    t.equal(el.outerHTML, '<ul class="a" bool=""><li>ok</li><li>now</li></ul>');

    el = createElement('meta', {name: 'mobile-web-app-capable', content: 'yes'});
    t.equal(el.outerHTML, '<meta name="mobile-web-app-capable" content="yes">');

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
