An internal `flatten` implementation for re-use.

Takes following args: 

- `value`: initial array
- `shallow`: whether to flatten recursively or just one level
- `strict`: if strict is `true` it won't keep any values other than arrays an arguments
- `output`: array or array-like object we're pushing to and will return
