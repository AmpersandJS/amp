Generates a simple integer-based unique ID string. This is *not* a uuid, it's for simpler things like ids for DOM elements or client instances. Its uniqueness is only guaranteed by the fact that it's a single, global, always incremented counter. If a prefix is passed, the id will be appended to it.

In order to ensure uniqueness in the case where two instances of this module is required, we keep the counter variable attached to `window` or `global` (in the case of node).
