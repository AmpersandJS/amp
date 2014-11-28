var escape = require('amp-escape');

var htmlString = '<b>HI</b>';

var escaped = escape(htmlString); //=> '&lt;b&gt;HI&lt;/b&gt;'
escape.unescape(escaped); //=> '<b>HI</b>'

// Alternately, since both `escape` and `unescape`
// are attached to the main export you can also
// follow this style:
var escaper = require('amp-escape');

// then use them both as properties of `escaper`
escaper.escape(htmlString); //=> '&lt;b&gt;HI&lt;/b&gt;'
escaper.unescape(escaped); //=> '<b>HI</b>'
