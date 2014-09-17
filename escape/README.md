## amp-escape


### the code

```javascript
var unescapeMap = {};
var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
};
for (var key in escapeMap) {
    unescapeMap[escapeMap[key]] = key;
}

 // Functions for escaping and unescaping strings to/from HTML interpolation.
var createEscaper = function(map) {
    var escaper = function(match) {
        return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + Object.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function (string) {
        string = string == null ? '' : '' + string;
        return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
};

module.exports = createEscaper(escapeMap);
module.exports.unescape = createEscaper(unescapeMap);
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-escape.png)](https://ci.testling.com/ampersandjs/amp-escape)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.