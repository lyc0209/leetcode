/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

    const cache1 = new Map()
    const cache2 = new Map()

    for (let i = 0; i < s.length; i++) {
        if ((cache1.has(s[i]) && cache1.get(s[i]) !== t[i]) || (cache2.has(t[i]) && cache2.get(t[i]) !== s[i])) {
            return false
        }
        cache1.set(s[i], t[i])
        cache2.set(t[i], s[i])
    }

    return true
};

const s = "egg"
const t = "add"

const res = isIsomorphic(s, t)

console.log(res)