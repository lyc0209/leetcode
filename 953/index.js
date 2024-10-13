/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {

  const orderMap = new Map()
  for (let i = 0; i < order.length; i++) {
    orderMap.set(order[i], i)
  }

  for (let i = 0; i < words.length - 1; i++) {

    let flag = false
    for (let j = 0; j < words[i].length && j < words[i + 1].length; j++) {
      const index1 = orderMap.get(words[i][j])
      const index2 = orderMap.get(words[i + 1][j])

      if (index1 > index2) {
        return false
      } else if (index1 < index2) {
        flag = true
        break
      }
    }

    if (!flag && words[i].length > words[i + 1].length) {
      return false
    }
  }

  return true
};

// console.log(isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz"))
console.log(isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz"))
// console.log(isAlienSorted(["apple","app"], "abcdefghijklmnopqrstuvwxyz"))