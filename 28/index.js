/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === null || needle === undefined || needle === "") {
    return 0
  }
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i
    }
  }
  return -1
};

const result = strStr("a", "a");
console.log(result);