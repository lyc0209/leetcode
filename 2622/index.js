var TimeLimitedCache = function() {
    this.cacheMap = new Map()
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let flag = false
    const target = this.cacheMap.get(key)
    if (target) {
        clearTimeout(target?.timerId)
        flag = true
    }
    const id = setTimeout(() => {
        this.cacheMap.delete(key)
    }, duration)
    this.cacheMap.set(key, {
        value: value,
        timerId: id
    })
    return flag
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const value = this.cacheMap.get(key)
    return !!value ? value.value : -1
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.cacheMap.size
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */

const obj = new TimeLimitedCache()
console.log(obj.set(1, 42, 1000)) // false
setTimeout(() => {
    console.log(obj.get(1)) // 42
    console.log(obj.count()) // 1
}, 1200)