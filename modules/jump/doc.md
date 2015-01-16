If you pass an array and an item in that array, returns the item immediately following that item.

Optionally, pass a number to specify how much to jump by (defaults to `1`). This number can be positive or negative.

If item is not in array, returns `undefined`.

If you jump out of range, returns `undefined` unless you pass `true` as the `loop` argument. In which case it loops around to other end.
