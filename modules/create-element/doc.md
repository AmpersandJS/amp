Nicer API for `document.createElement`. Rather than just taking a single argument, takes name of tag, optionally text, attributes (as an object) and optionally an array of child elements.

Possible argument styles:

`(name)`
`(name, innerText)`
`(name, innerText, attrs)`
`(name, innerText, attrs, children)`
`(name, innerText, children)`
`(name, attrs)`
`(name, attrs, children)`
`(name, children)`

**Note:** this doesn't handle every possible use case. For example, you can't directly generate `<p>a <small>small</small> thing</p>` for example as there's no way to specify text nodes containing HTML. For these uses there are plenty of options for templating HTML. This is meant to simply the common use case of generating simple elements with attributes or text.
