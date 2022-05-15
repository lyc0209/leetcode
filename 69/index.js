/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {

  let left = 0
  let right = x

  let tempNumber = x
  while (left <= right) {
    const middleNumber = (left + (right - left) / 2) | 0
    if (Math.pow(middleNumber, 2) > x) {
      // 寻找左边界值(刚好平方值比x小)
      right = middleNumber - 1
      tempNumber = right
    } else {
      left = middleNumber + 1
    }
  }
  return tempNumber
};

const result = mySqrt(4)
console.log(result)