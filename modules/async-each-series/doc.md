You can think of this as an asynchronous version of amp-each. It iterates over elements of an array or keys and values of an object.

It asynchronously iterates over all items in an array or keys in an object one at a time, passing each item to the function you supply along with a callback.  That function's `this` will be the context object if provided before the callback.

In the case of an `Array` or `arguments` object your iterator will be called with the arguments `(item, cb)`. 

In the case of an object the arguments will be `(value, key, cb)`.
