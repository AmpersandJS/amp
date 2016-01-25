A nicer interface to `element.setAttribute`. Supports regular simple, `setAttribute(el, 'name', 'value')`. But also supports booleans for adding/removing boolean attributes (like `checked`). To add `checked` simply do: `setAttribute(el, 'checked', true)` (see note below). It assumes falsy, non-boolean values, like `null` or `undefined` to be equivalent to empty string (`''`).

You can also pass an object with name, value pairs. Each name, value pair will be applied using described above.

**note:** This also sets corresponding properties on element for boolean attributes, and for `value`.
