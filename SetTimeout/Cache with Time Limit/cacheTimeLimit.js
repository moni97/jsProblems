var TimeLimitedCache = function() {
    
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    
    if (!(key in this)) {
        timeoutId = setTimeout(() => {
            delete this[key];
        }, duration)
        this[key] = [value, duration, timeoutId]
        return false;
    } else {
        stored = this[key]
        console.log(stored)
        clearTimeout(stored[2])
        timeoutId = setTimeout(() => {
            delete this[key];
        }, duration)
        this[key] = [value, duration, timeoutId]
        return true;
    }
    
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if (key in this) {
        return this[key][0]
    } else {
        return -1;
    }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return Object.keys(this).length;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
