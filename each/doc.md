You can think of this as an `Array.prototype.forEach` that also works on objects and rather than returning `undefined` as the native `forEach` does, it returns the list/object you're iterating over.

It iterates over all items in an array or keys in an object one at a time, passing each item to the function you supply. That function's `this` will be the context object, you provide if you passed one as a third argument.

Your function will be called with three arguments. In the case of an `Array` or `arguments` object those items will be `(item, index, list)`. 

In the case of an object the arguments will be `(value, key, list)`.
