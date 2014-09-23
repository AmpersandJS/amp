## amp-is-regexp


### the code

```javascript
var toString = Object.prototype.toString;


module.exports = function isRegExp(obj) {
    return toString.call(obj) === '[object RegExp]';
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-is-regexp.png)](https://ci.testling.com/ampersandjs/amp-is-regexp)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.