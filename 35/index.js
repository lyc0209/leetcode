/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const middlePosition = ((left + right) / 2) | 0
    const middleNumber = nums[middlePosition]
    if (target === middleNumber) {
      return middlePosition
    } else if (target < middleNumber) {
      right = middlePosition - 1
    } else  {
      left = middlePosition + 1
    }
  }
  return left
};

const result = searchInsert([1,3,5,6], 7)
console.log(result)