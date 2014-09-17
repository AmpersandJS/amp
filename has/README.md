## amp-has


### the code

```javascript
module.exports = function has(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-has.png)](https://ci.testling.com/ampersandjs/amp-has)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.