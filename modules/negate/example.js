var negate = require('amp-negate');
var amp-find = require('amp-find');

var isFalsy = negate(Boolean);

find([-2, -1, 0, 1, 2], isFalsy); => 0
