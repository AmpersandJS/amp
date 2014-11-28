Produces a duplicate-free version of the array, (using === to test object equality, by default). 

If you know in advance that the array is sorted, passing `true` for isSorted will run a much faster algorithm. 

If you want to compute unique items based on a transformation, pass an `iteratee` function. If said `iteratee` requires custom context, you can pass that as the last argument.
