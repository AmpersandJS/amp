Creates and returns a new debounced version of the passed function which will postpone its execution until after **wait** milliseconds have elapsed since the last time it was invoked. This is useful for implementing behavior that should only happen after something has stopped occuring. For example: validating an input, recalculating a layout after the window has stopped being resized, and so on.

Pass `true` for the `immediate` parameter to cause debounce to trigger the function on the leading instead of the trailing edge of the wait interval.
