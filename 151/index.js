/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.trim().split(" ").filter((item) => item !== "").reverse().join(" ")
};

const result = reverseWords("   a good day  d")
console.log(result)