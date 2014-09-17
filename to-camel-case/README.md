## amp-to-camel-case


### the code

```javascript
var isString = require('../is-string');
var re1 = /([\W_\-]+\S?)/g;
var re2 = /[\W_]/g;


module.exports = function toCamelCase(string) {
    if (!isString(string)) return '';
    var replaced = string.replace(re1, function (match) {
        return match.replace(re2, '').toUpperCase();
    });
    return replaced.slice(0, 1).toLowerCase() + replaced.slice(1);
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-to-camel-case.png)](https://ci.testling.com/ampersandjs/amp-to-camel-case)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.