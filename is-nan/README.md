## amp-is-nan

Tests whether object passed in is a `NaN`. Native implementations of `isNaN` return `true` when passed `undefined`. So if you want to test whether `NaN` is exactly `NaN` this does that. 

### `isNaN(obj)`

* obj {anything} Object to test

### the code

```javascript
var isNumber = require('amp-is-number');


module.exports = function isNaN(obj) {
    return isNumber(obj) && obj !== +obj;
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-is-nan.png)](https://ci.testling.com/ampersandjs/amp-is-nan)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.