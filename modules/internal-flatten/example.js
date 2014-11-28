var internalFlatten = require('amp-internal-flatten');

var arr = [1, [1], [[1]], 'something'];

// shallow
internalFlatten(arr, true, false, []); 
//=> [1, 1, [1], 'something'];

// recursive
internalFlatten(arr, false, false, []); 
//=> [1, 1, 1, 'something'];

// recursive + strict 
// these options *always* will
// result an empty array as output
internalFlatten(arr, false, true, []); 
//=> [];

// shallow + strict
// any non-arrays are removed
// but only run through once
// so only 2ns and 3rd args make it
// but are flattened one level
internalFlatten(arr, true, true, []); 
//=> [1, [1]];
