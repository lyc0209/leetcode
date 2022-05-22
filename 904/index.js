/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {

  let result = 0
  let start = 0
  let leftNumber = fruits[0]
  let rightNumber = fruits[0]

  for (let end = 0; end < fruits.length;) {
    if (fruits[end] === leftNumber || fruits[end] === rightNumber) {
      result = Math.max(result, end - start + 1)
      end++
    } else {
      start = end - 1
      leftNumber = fruits[start]
      while (start > 0 && fruits[start - 1] === leftNumber) {
        start -= 1
      }
      rightNumber = fruits[end]
      result = Math.max(result, end - start + 1)
    }
  }

  return result
};

const result = totalFruit([1, 0, 1, 4, 1, 4, 1, 2, 3])
console.log(result)