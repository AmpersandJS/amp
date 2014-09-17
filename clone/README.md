## amp-clone


### the code

```javascript
var isObject = require('../is-object');
var isArray = require('../is-array');
var extend = require('../extend');


module.exports = function clone(obj) {
    if (!isObject(obj)) return obj;
    return isArray(obj) ? obj.slice() : extend({}, obj);
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-clone.png)](https://ci.testling.com/ampersandjs/amp-clone)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.