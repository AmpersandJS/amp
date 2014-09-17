## amp-is-nan


### the code

```javascript
var isNumber = require('../is-number');


module.exports = function isNaN() {
    return isNumber(obj) && obj !== +obj;
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-is-nan.png)](https://ci.testling.com/ampersandjs/amp-is-nan)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.