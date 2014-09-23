## amp-is-array


### the code

```javascript
var toString = Object.prototype.toString;
var isArray = Array.isArray;


module.exports = isArray || function isArray(obj) {
    return toString.call(obj) === '[object Array]';
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-is-array.png)](https://ci.testling.com/ampersandjs/amp-is-array)

### Dependency tree

```json
{
    "name": "is-array",
    "deps": []
}
```

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.