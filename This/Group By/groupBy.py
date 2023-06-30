/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    res = {}
    for(let i= 0; i< this.length ; i++) {
        let key = fn(this[i]);
        if (key in res){
            res[key].push(this[i]) 
        } else {
            res[fn(this[i])] = [this[i]]
        }
    }
    return res;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
