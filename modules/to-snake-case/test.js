var test = require('tape');
var toSnakeCase = require('./to-snake-case');

test('amp-to-snake-case', function (t) {
	t.equal(toSnakeCase('!!!'), '');
	t.equal(toSnakeCase([]), '');
	t.equal(toSnakeCase(2006), '');
	t.equal(toSnakeCase('____'), '');
	t.equal(toSnakeCase('on a plane'), 'on_a_plane');
	t.equal(toSnakeCase('on a mother friendly? plane', true), 'ON_A_MOTHER_FRIENDLY_PLANE');
	t.equal(toSnakeCase('_  they\'re   EVERYWHERE!!'), 'they_re_everywhere');
	t.equal(toSnakeCase('tired o\' these snakes'), 'tired_o_these_snakes');
	t.equal(toSnakeCase('test------ssssnakes___!'), 'test_ssssnakes');
	t.equal(toSnakeCase('no mo snakes', true), 'NO_MO_SNAKES');
  t.end();
});