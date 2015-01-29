Inserts an item onto an already sorted array (or array-like object) in a way that leaves the
array sorted and returns the index at which the new item was inserted.

Uses a binary search using the new item and the items in the array to
determine where to put the new item.

Sorting is done either by raw comparison (`<`, `>`, `=`) or via a
comparator which can be a string representing a named attribute of the
itme, or a function that will be given one item and will return the
value to be used in comparisons.

