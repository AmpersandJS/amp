var trim = require('amp-trim');

trim(' oh, hi there! '); //=> 'oh, hi there!'
// works for all whitespace types
trim('\n\r\t oh, hi there!'); //=> 'oh, hi there!'
