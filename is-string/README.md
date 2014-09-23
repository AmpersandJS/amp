## amp-is-string


### the code

```javascript
var toString = Object.prototype.toString;


module.exports = function isString(obj) {
    return toString.call(obj) === '[object String]';
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-is-string.png)](https://ci.testling.com/ampersandjs/amp-is-string)

### Dependency tree

```json
{
    "name": "is-string",
    "deps": []
}
```

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.