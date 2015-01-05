Returns the index at which the item can be found in the array (also works for `arguments` object). Returns `-1` if value is not present. Uses native `Array.prototype.indexOf` if present. But, unlike native implementations this won't throw an error if passed something other than an array, it'll just return `-1`. 

*note:* This is not intended for use with sparse arrays as there will be some inconsistencies in how those are handled in the fallback implementation for old IEs.
