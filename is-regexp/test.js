var test = require('tape');
var pack = require('./package.json');
var isRegExp = require('./' + pack.main);


test('amp-is-regexp', function (t) {
    t.ok(!isRegExp(function () {}), 'functions are not RegExps');
    t.ok(isRegExp(/identity/), 'but RegExps are');
    t.end();
});
