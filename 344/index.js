/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  const len = s.length
  for (let i = 0; i < len / 2; i++) {
    const tmp = s[i]
    s[i] = s[len - i - 1]
    s[len - i - 1] = tmp
  }
};

const arr = ["H","a","n","n","a","h"]
reverseString(arr)
console.log(arr)