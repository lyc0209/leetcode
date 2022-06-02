/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const arr = []
  for (let i = 0; i < 26; i++) {
    arr[i] = 0
  }
  for (let ele of s) {
    const index = ele.charCodeAt(0) - 97
    arr[index] = arr[index] + 1
  }
  for (let ele of t) {
    const index = ele.charCodeAt(0) - 97
    arr[index] = arr[index] - 1
  }
  for (let i = 0; i < 26; i++) {
    if (arr[i] !== 0) {
      return false
    }
  }
  return true
};

const result = isAnagram("anagram", "nagaram")
console.log(result)