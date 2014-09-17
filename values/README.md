## amp-values


### the code

```javascript
var objKeys = Object.prototype.keys;


module.exports = function values(obj) {
    var keys = objKeys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
        values[i] = obj[keys[i]];
    }
    return values;
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-values.png)](https://ci.testling.com/ampersandjs/amp-values)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.