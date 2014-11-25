Escapes (or unescapes) a string for insertion into HTML, by replacing `&`, `<`, `>`, `"`, `` ` ``, and `'` characters with their corresponding HTML entities.

The vast majority of time you use this you just want to escape. But since 99% of the code is the same, there's also support for unescaping.

The main export is just the `escape` method, but we also attach `escape` and `unescape` as properties so you can use the style in second example if preferred.
