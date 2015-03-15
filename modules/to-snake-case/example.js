var toSnakeCase = require('amp-to-snake-case');

toSnakeCase('tired of these snakes'); //=> 'tired_of_these_snakes'
toSnakeCase('on this mother truckin plane', true); //=> 'ON_THIS_MOTHER_TRUCKIN_PLANE'