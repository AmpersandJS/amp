Nicer API for `document.createElement`. Rather than just taking a single argument, takes name of tag, optinally text, attributes (as an object) and optionally an array of child elements.

Possible argument styles:

`(name)`
`(name, innerText)`
`(name, innerText, attrs)`
`(name, innerText, attrs, children)`
`(name, innerText, children)`
`(name, attrs)`
`(name, attrs, children)`
`(name, children)`
