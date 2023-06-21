/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    const p1 = (t) => {
        return new Promise((res, rej) => {
            setTimeout(() => rej("Time Limit Exceeded"), t);  
        });
    }
    
	return async function(...args) {
        return new Promise((res, rej) => {
            Promise.race([p1(t), fn(...args)])
            .then(
                    (val) => {
                        res(val);
                    },
                    (err) => {
                        rej(err);
                    }
                )
            })
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
