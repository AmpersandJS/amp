var test = require('tape');
var escape = require('./escape');
var unescape = escape.unescape;
var each = require('../each');


test('amp-escape', function (t) {
    t.equal(escape(null), '');

    var string = 'Curly & Moe';
    t.equal(unescape(null), '');
    t.equal(unescape(escape(string)), string);
    t.equal(unescape(string), string, 'don\'t unescape unnecessarily');

    // test & (&amp;) seperately obviously
    var escapeCharacters = ['<', '>', '"', '\'', '`'];

    each(escapeCharacters, function(escapeChar) {
      var str = 'a ' + escapeChar + ' string escaped';
      var escaped = escape(str);
      t.notEqual(str, escaped, escapeChar + ' is escaped');
      t.equal(str, unescape(escaped), escapeChar + ' can be unescaped');

      str = 'a ' + escapeChar + escapeChar + escapeChar + 'some more string' + escapeChar;
      escaped = escape(str);

      t.equal(escaped.indexOf(escapeChar), -1, 'can escape multiple occurances of ' + escapeChar);
      t.equal(unescape(escaped), str, 'multiple occurrences of ' + escapeChar + ' can be unescaped');
    });

    // handles multiple escape characters at once
    var joiner = ' other stuff ';
    var allEscaped = escapeCharacters.join(joiner);
    allEscaped += allEscaped;

    var error = false;
    each(escapeCharacters, function (escapeChar) {
        if (!error) {
            error = allEscaped.indexOf(escapeChar) === -1;
        }
    });
    t.ok(!error, 'handles multiple characters');
    t.ok(allEscaped.indexOf(joiner) >= 0, 'can escape multiple escape characters at the same time');

    // test & -> &amp;
    var str = 'some string & another string & yet another';
    var escaped = escape(str);

    t.ok(escaped.indexOf('&') !== -1, 'handles & aka &amp;');
    t.equal(unescape(str), str, 'can unescape &amp;');
    t.end();
});
