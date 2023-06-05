/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let constInit = init;
    function increment() {
        return init+=1;
    }
    function reset() {
        init = constInit;
        return constInit;
    }
    function decrement() {
        return init -= 1;
    }
    return {increment, reset, decrement}
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
