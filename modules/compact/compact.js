var filter = require('amp-filter');

module.exports = function compact(arr) {
  return filter(arr, function (val) { 
    return val; 
  });
};