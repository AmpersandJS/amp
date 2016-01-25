var createElement = require('amp-create-element');


el = createElement('div');
//=> <div></div>

el = createElement('div', 'hi');
//=> <div>hi</div>

el = createElement('div', 'hi', {ok: 'stuff'});
//=> <div ok="stuff">hi</div>

el = createElement('div', 'hi', {ok: 'stuff'}, [createElement('p', 'ok')]);
//=> <div ok="stuff">hi<p>ok</p></div>

el = createElement('div', 'hi', {ok: 'stuff'}, [createElement('p', 'ok')]);
//=> <div ok="stuff">hi<p>ok</p></div>

el = createElement('div', 'hi', [createElement('p', 'ok')]);
//=> <div>hi<p>ok</p></div>

el = createElement('div', {ok: 'stuff'});
//=> <div ok="stuff"></div>

el = createElement('div', {ok: 'stuff'}, [createElement('p', 'ok')]);
//=> <div ok="stuff"><p>ok</p></div>

el = createElement('div', [createElement('p', 'ok'), createElement('p', 'ok2')]);
//=> <div><p>ok</p><p>ok2</p></div>
