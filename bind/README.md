## amp-bind

```
bind(function, object, *arguments);
```

Bind a function to an object, meaning that whenever the function is called, the value of `this` will be the object. Optionally, pass arguments to the function to pre-fill them, also known as partial application.

**note:** If you *know* you're in an environment where you have native `Function.prototype.bind` there's really no reason not to just use that. It even does the partial application as described above. Most JS runtimes have it these days. Notable exceptions are Phantom.js and IE8 or older.

### the code

```javascript
var isFunction = require('../is-function');
var isObject = require('../is-object');
var nativeBind = Function.prototype.bind;
var slice = Array.prototype.slice;
var Ctor = function () {};


module.exports = function bind(func, context) {
    var args, bound;
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!isFunction(func)) throw new TypeError('Bind must be called on a function');
    args = slice.call(arguments, 2);
    bound = function() {
        if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
        Ctor.prototype = func.prototype;
        var self = new Ctor;
        Ctor.prototype = null;
        var result = func.apply(self, args.concat(slice.call(arguments)));
        if (isObject(result)) return result;
        return self;
    };
    return bound;
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-bind.png)](https://ci.testling.com/ampersandjs/amp-bind)

### Dependency tree

```json
{
    "name": "bind",
    "deps": [
        {
            "name": "is-function",
            "deps": []
        },
        {
            "name": "is-object",
            "deps": []
        }
    ]
}
```

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.