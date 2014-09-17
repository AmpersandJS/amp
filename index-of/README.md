## amp-index-of


### the code

```javascript
var isObj = require('../is-object');
var arrayInd = Array.prototype.indexOf;


module.exports = function indexOf(obj, val) {
    if (!isObj(obj)) return -1;
    return arrayInd.call(obj, val);
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-index-of.png)](https://ci.testling.com/ampersandjs/amp-index-of)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.