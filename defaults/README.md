## amp-defaults


### the code

```javascript
var isObject = require('../is-object');


module.exports = function defaults(obj) {
    if (!isObject(obj)) return obj;
    for (var i = 1, length = arguments.length; i < length; i++) {
        var source = arguments[i];
        for (var prop in source) {
            if (obj[prop] === void 0) obj[prop] = source[prop];
        }
    }
    return obj;
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-defaults.png)](https://ci.testling.com/ampersandjs/amp-defaults)

### Dependency tree

```json
{
    "name": "defaults",
    "deps": [
        {
            "name": "is-object",
            "deps": []
        }
    ]
}
```

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.