Toggles the existence of a class on an element. If the class exists it will be removed, if it doesn't it will be added. 

If a `condition` argument is supplied, the truthiness of that condition is what determines whether the class should exist on the element or not. This simplifies common use case of an element needing a class if `condition` is true. `condition` can be passed as either a primitive which will eventually coerce to boolean or as a function. If you pass a function, you get current element passed as a first argument.
