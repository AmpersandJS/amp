Removes class(es) from an element.

All of the following work:

```javascript
removeClass(el, 'foo');
removeClass(el, 'foo bar');
removeClass(el, 'foo', 'bar');
removeClass(el, ['foo', 'bar']);
```

Optimized for minimal DOM manipulation. The most common usecase of removing a single class will use native `Element.classList` if available. Otherwise, it will do a single read of `el.className` and only write back to it once, and only if something was actually changed.

**note**: Don't mix-and-match approaches. For example, don't do `removeClass(el, 'foo', ['bar', 'baz'])`. If you need this, flatten it first.
