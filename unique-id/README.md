## amp-unique-id


### the code

```javascript
// Generate a unique integer id (unique within the entire client session).
// Useful for temporary DOM ids.
var idCounter = 0;


module.exports = function uniqueId(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-unique-id.png)](https://ci.testling.com/ampersandjs/amp-unique-id)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.