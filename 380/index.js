
var RandomizedSet = function() {
    this.arr = []
    this.cache = new Map()
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.cache.has(val)) {
        return false
    }

    this.arr.push(val)

    this.cache.set(val, this.arr.length - 1)

    return true
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.cache.has(val)) {
        return false
    }

    const index = this.cache.get(val)

    this.arr[index] = this.arr[this.arr.length - 1]
    this.cache.set(this.arr[index], index)

    this.arr.pop()
    this.cache.delete(val)

    return true
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {

    const radonNum = Math.floor(Math.random() * this.arr.length)

    return this.arr[radonNum]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var obj = new RandomizedSet()
obj.insert(1)
obj.insert(2)
obj.insert(3)
obj.insert(4)
obj.insert(5)
var param_1 = obj.insert(5)
var param_2 = obj.remove(2)
var param_3 = obj.getRandom()

console.log(param_1, param_2, param_3)
