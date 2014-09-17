## amp-is-arguments


### the code

```javascript
var toString = Object.prototype.toString;


module.exports = function (obj) {
    return toString.call(obj) === '[object Arguments]';
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-is-arguments.png)](https://ci.testling.com/ampersandjs/amp-is-arguments)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.