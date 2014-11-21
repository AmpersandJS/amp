var test = require('tape');
var isRegExp = require('./is-regexp');


test('amp-is-regexp', function (t) {
    t.ok(!isRegExp(function () {}), 'functions are not RegExps');
    t.ok(isRegExp(/identity/), 'but RegExps are');
    t.end();
});
