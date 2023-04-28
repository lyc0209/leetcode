/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timer = null
    return function(...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn(...args)
            clearTimeout(timer)
        }, t)
    }
};

const log = debounce(console.log, 100);
log('Hello1'); // cancelled
log('Hello2'); // cancelled
log('Hello3'); // Logged at t=100ms

setTimeout(() => {
    log('Hello4');
}, 99)