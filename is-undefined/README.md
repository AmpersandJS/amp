## amp-is-undefined


### the code

```javascript
module.exports = function isUndefined(obj) {
    return obj === void 0;
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-is-undefined.png)](https://ci.testling.com/ampersandjs/amp-is-undefined)

### Dependency tree

```json
{
    "name": "is-undefined",
    "deps": []
}
```

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.