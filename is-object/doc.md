Returns `true` if passed value is an `Object`. Arrays and functions are objects too, while (normal) strings and numbers are not.

So this is not a strict check per JS where `typeof null` returns `'object'`. This is a more practical runtime check that is useful for trying to find out whether you got passed an options object or a simple argument to a function.
