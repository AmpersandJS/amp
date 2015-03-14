var test = require('tape');
var toKebabCase = require('./to-kebab-case');

test('amp-to-kebab-case', function (t) {
    t.equal(toKebabCase(' Good Day'), 'good-day');
    t.equal(toKebabCase('_good_day'), 'good-day');
    t.equal(toKebabCase(' _good_day '), 'good-day');
    t.equal(toKebabCase(' _ good--day'), 'good-day');
    t.equal(toKebabCase(' _ good2--day '), 'good2-day');
    t.equal(toKebabCase(' _ good- -day good'), 'good-day-good');
    t.equal(toKebabCase([]), '');
    t.equal(toKebabCase({}), '');
    t.equal(toKebabCase(1), '');
    t.end();
});
