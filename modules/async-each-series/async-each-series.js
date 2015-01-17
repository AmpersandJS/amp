var objKeys = require('amp-keys');
var isFunction = require('amp-is-function');
var createCallback = require('amp-create-callback');

module.exports = function asyncEachSeries(obj, iterator, context, callback) {
    if (obj == null) callback(new Error('invalid target for iteration'));

    if (!context && !callback) {
        // callback is optional
        callback = function () {};
    } else if (isFunction(context)) {
        callback = context;
        context = void 0; // undefined
    } else {
        callback = callback || function () {};
    }

    iterator = createCallback(iterator, context);

    function iterateObject() {
      var keys = objKeys(obj);
      if (!keys.length) {
          callback(null);
          callback = function() {};
          return;
      }

      // done this way to support the change of the array length while iterating.
      // thank you caolan fo this
      var iterate = function () {
          var key = keys.shift();
          iterator(obj[key], key, function (err) {
              if (err) {
                  callback(err);
                  callback = function () {};
              } else {
                  if (keys.length) {
                      iterate();
                  } else {
                      callback(null);
                  }
              }
          });
      };

      return iterate();
    }

    function iterateArray() {
        if (!obj.length) {
            callback(null);
            callback = function () {};
            return;
        }

        var completed = 0;

        // done this way to support the change of the array length while iterating.
        // thank you caolan fo this
        var iterate = function () {
            iterator(obj[completed], function (err) {
                if (err) {
                    callback(err);
                    callback = function () {};
                } else {
                    completed += 1;
                    if (completed >= obj.length) {
                        callback(null);
                    } else {
                        iterate();
                    }
                }
            });
        };

        iterate();
    }

    if (obj.length === void 0) {
        iterateObject();
    } else {
        iterateArray();
    }
};
