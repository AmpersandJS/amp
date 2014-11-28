Returns `true` if the object contains the given key, `false` otherwise. Identical to `object.hasOwnProperty(key)`, but uses `Object.prototype.hasOwnProperty` directly in case it's been overridden on the object itself.

Also, protects against some obscure quirks with enumerable built-ins in IE < 9.
