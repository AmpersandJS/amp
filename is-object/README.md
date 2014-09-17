## amp-is-object


### the code

```javascript
module.exports = function isObject(obj) {
    var type = typeof obj;
    return !!obj && (type === 'function' || type === 'object');
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-is-object.png)](https://ci.testling.com/ampersandjs/amp-is-object)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.