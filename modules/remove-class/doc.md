Removes class(es) from an element.

Optimized for minimal DOM manipulation. The most common usecase of removing a single class will use native `Element.classList` if available. Otherwise, it will do a single read of `el.className` and only write back to it once, and only if something was actually changed.
