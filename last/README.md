## amp-last


### the code

```javascript
var slice = Array.prototype.slice;


module.exports = function last(arr, n, guard) {
    if (arr == null) return void 0;
    if (n == null || guard) return arr[arr.length - 1];
    return slice.call(arr, Math.max(0, arr.length - n));
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-last.png)](https://ci.testling.com/ampersandjs/amp-last)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.