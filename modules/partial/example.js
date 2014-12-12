var partial = require('amp-partial');

var add = function(a, b) { return a + b; };
add5 = partial(add, 5);
add5(10);// 15

var concat = function (a, b, c) { return [a, b, c].join(''); }
hyphenate = partial(concat, partial, '-');
hyphenate('the', 'code'); // 'the-code'
