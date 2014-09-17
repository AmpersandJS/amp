## amp-contains

Determines whether an array contains an item.

### `contains(array, item)`

* array {Array} the array to look in
* item {anything} the item to look for in the array

### the code

```javascript
var values = require('../values');
var indexOf = require('../index-of');


module.exports = function contains(obj, target) {
    if (obj == null) return false;
    if (obj.length !== +obj.length) obj = values(obj);
    return indexOf(obj, target) >= 0;
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-contains.png)](https://ci.testling.com/ampersandjs/amp-contains)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.