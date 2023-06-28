/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let lastCall = -1, currCall, timeoutId = false;
    return function(...args) {
        if (lastCall == -1) {
            lastCall = Date.now()
            timeoutId = setTimeout(() => {fn(...args);}, t)
            return
        }
        timeDifference = Date.now() - lastCall
        lastCall = Date.now()
        if (timeDifference <= t) {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => {fn(...args);}, t)
        } else {
            timeoutId = setTimeout(() => {fn(...args);}, t)
        }
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
