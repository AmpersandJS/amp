Returns a version of the function that will only be run after first being called `count` times. Useful for things like grouping asynchronous responses, where you want to be sure that all the async calls have finished, before proceeding.