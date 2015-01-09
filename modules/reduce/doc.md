Boils down a list of values or an object into a single value. Memo is the initial state of the reduction, and each successive step of it should be returned by iteratee. Iteratee will be called with four arguments (memo, value, index || key, list || object).

If no memo is passed to the initial invocation of reduce, the iteratee is not invoked on the first element of the list. Instead, the first element is passed as the memo in the invocation of the iteratee on the next element in the list.
