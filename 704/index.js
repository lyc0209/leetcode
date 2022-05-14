/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const left = 0
  const right = nums.length - 1
  return binarySearch(nums, target, left, right)
};

/**
 *
 * @param nums {number[]} nums
 * @param target {number} target
 * @param left {number}
 * @param right {number}
 * @return {number}
 */
const binarySearch = (nums, target, left, right) => {

  if (left > right) {
    return -1
  }

  const middlePosition = ((left + right) / 2) | 0
  const middleNumber = nums[middlePosition]
  if (middleNumber === target) {
    return middlePosition
  } else if (middleNumber < target) {
    left = middlePosition + 1
  } else {
    right = middlePosition - 1
  }
  return binarySearch(nums, target, left, right)
}

const result = search([-1, 0, 3, 5, 9, 12], 2)
console.log(result)
