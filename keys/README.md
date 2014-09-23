## amp-keys


### the code

```javascript
var has = require('amp-has');
var isObject = require('amp-is-object');
var contains = require('amp-contains');
var nativeKeys = Object.prototype.keys;


// Keys in IE that won't be iterated by `for key in ...` and thus missed.
var hasEnumBug = !({toString: null}).propertyIsEnumerable('toString');
var nonEnumerableProps = [
    'constructor',
    'valueOf',
    'isPrototypeOf',
    'toString',
    'propertyIsEnumerable',
    'hasOwnProperty',
    'toLocaleString'
];


module.exports = function keys(obj) {
    if (!isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (has(obj, key)) keys.push(key);

    // fallback for IE
    if (hasEnumBug) {
        var nonEnumIdx = nonEnumerableProps.length;
        while (nonEnumIdx--) {
            var prop = nonEnumerableProps[nonEnumIdx];
            if (has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);
        }
    }
    return keys;
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-keys.png)](https://ci.testling.com/ampersandjs/amp-keys)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.