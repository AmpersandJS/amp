var test = require('tape');
var toCamelCase = require('./to-camel-case');


test('amp-to-camel-case', function (t) {
    t.equal(toCamelCase(' hi world'), 'hiWorld');
    t.equal(toCamelCase('_hi_world'), 'hiWorld');
    t.equal(toCamelCase(' _ hi--world'), 'hiWorld');
    t.equal(toCamelCase(' _ hi2--world'), 'hi2World');
    t.equal(toCamelCase([]), '');
    t.equal(toCamelCase({}), '');
    t.equal(toCamelCase(1), '');
    t.equal(toCamelCase(' hi world', true), 'HiWorld');
    t.equal(toCamelCase('_hi_world', true), 'HiWorld');
    t.equal(toCamelCase(' _ hi--world', true), 'HiWorld');
    t.equal(toCamelCase(' _ hi2--world', true), 'Hi2World');
    t.end();
});
