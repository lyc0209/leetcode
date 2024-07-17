/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    const strList = s
        .split("")
        .map((item) => item.toLowerCase())
        .filter((item) => (item.charCodeAt(0) >= "a".charCodeAt(0) && item.charCodeAt(0) <= "z".charCodeAt(0)) || item.charCodeAt(0) >= "0".charCodeAt(0) && item.charCodeAt(0) <= "9".charCodeAt(0))


    for (let i = 0; i < strList.length; i++) {
        if (strList[i] === strList[strList.length - i - 1]) {
            continue
        } else {
            return false
        }
    }
    return true
};

const str = "0P"

const res = isPalindrome(str)

console.log(res)