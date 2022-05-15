/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let left = 0
  let right = num
  let tempNumber = num

  while (left <= right) {
    const middleNumber = (left + (right - left) / 2) | 0
    if (Math.pow(middleNumber, 2) > num) {
      right = middleNumber - 1
      tempNumber = right
    } else {
      left = middleNumber + 1
    }
  }

  return Math.pow(tempNumber, 2) === num
};

const result = isPerfectSquare(25)
console.log(result)