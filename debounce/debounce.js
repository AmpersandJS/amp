var now = Date.now;

// IE < 9
if (!now) {
    now = function () {
        return (new Date()).valueOf();
    };
}

module.exports = function debounce(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function () {
        var last = now() - timestamp;

        if (last < wait && last >= 0) {
            timeout = setTimeout(later, wait - last);
        } else {
            timeout = null;
            if (!immediate) {
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            }
        }
    };

    return function () {
        context = this;
        args = arguments;
        timestamp = now();
        var callNow = immediate && !timeout;
        if (!timeout) timeout = setTimeout(later, wait);
        if (callNow) {
            result = func.apply(context, args);
            context = args = null;
        }

        return result;
    };
};
