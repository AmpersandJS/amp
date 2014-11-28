Slightly cleaner version of `setTimeout`, it invokes function after specified milliseconds. But also lets you set a context in which to call it (note that this differs from underscore's implementation).

Returns the result of `setTimeout` so you can still use that with [`clearTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers.clearTimeout) if you need to halt it for some reason.

Related: for an excellent visual explanation of event loop and how things like `setTimeout` actually work, watch [Philip Robert's](https://twitter.com/philip_roberts) talk ["What the heck is the event loop anyway?"](http://2014.jsconf.eu/speakers/philip-roberts-what-the-heck-is-the-event-loop-anyway.html).
