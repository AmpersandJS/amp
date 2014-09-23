## amp-is-empty


### the code

```javascript
var isArray = require('../is-array');
var isString = require('../is-string');
var isArguments = require('../is-arguments');
var hasOwn = Object.prototype.hasOwnProperty;


module.exports = function isEmpty(obj) {
    if (obj == null) return true;
    if (isArray(obj) || isString(obj) || isArguments(obj)) return obj.length === 0;
    for (var key in obj) {
        if (hasOwn.call(obj, key)) return false;
    }
    return true;
}
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-is-empty.png)](https://ci.testling.com/ampersandjs/amp-is-empty)

### Dependency tree

```json
{
    "name": "is-empty",
    "deps": [
        {
            "name": "is-array",
            "deps": []
        },
        {
            "name": "is-string",
            "deps": []
        },
        {
            "name": "is-arguments",
            "deps": []
        }
    ]
}
```

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.