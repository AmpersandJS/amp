Merge source objects together and return a new object. This is done in order, so the last source will override properties of the same name in previous arguments.

Note that this is a shallow copy, meaning that nested objects won't be merged or extended.