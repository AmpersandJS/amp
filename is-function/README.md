## amp-is-function


### the code

```javascript
var toString = Object.prototype.toString;
var func = function isFunction() {
    return toString.call(obj) === '[object Function]';
}

// Optimize `isFunction` if appropriate. Work around an IE 11 bug.
if (typeof /./ !== 'function') {
    func = function isFunction(obj) {
      return typeof obj == 'function' || false;
    };
}

module.exports = func;
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-is-function.png)](https://ci.testling.com/ampersandjs/amp-is-function)

### Dependency tree

```json
{
    "name": "is-function",
    "deps": []
}
```

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.