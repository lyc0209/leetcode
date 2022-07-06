/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let result = []
  for (let i = 0, count = 0; i < s.length; i += k, count++) {
    if (count % 2 === 0) {
      result.push(s.substring(i, i + k).split("").reverse().join(""))
    } else {
      result.push(s.substring(i, i + k))
    }
  }

  return result.join("")
};

const result = reverseStr("abcdefg", 2);
console.log(result);
// abcdefg
// bacdfeg