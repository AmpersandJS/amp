## amp-invert


### the code

```javascript
var objKeys = require('../keys');


module.exports = function invert(obj) {
    var result = {};
    var keys = objKeys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
        result[obj[keys[i]]] = keys[i];
    }
    return result;
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-invert.png)](https://ci.testling.com/ampersandjs/amp-invert)

### Dependency tree

```json
{
    "name": "invert",
    "deps": [
        {
            "name": "keys",
            "deps": [
                {
                    "name": "has",
                    "deps": []
                },
                {
                    "name": "is-object",
                    "deps": []
                },
                {
                    "name": "contains",
                    "deps": [
                        {
                            "name": "values",
                            "deps": []
                        },
                        {
                            "name": "index-of",
                            "deps": [
                                {
                                    "name": "is-object",
                                    "deps": []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
```

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.