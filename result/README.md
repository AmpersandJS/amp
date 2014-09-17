## amp-result


### the code

```javascript
var isFunction = require('../is-function');


module.exports = function result(object, property, defaultValue) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
        return defaultValue;
    }
    return isFunction(value) ? object[property]() : value;
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-result.png)](https://ci.testling.com/ampersandjs/amp-result)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.