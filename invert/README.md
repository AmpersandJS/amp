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

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.