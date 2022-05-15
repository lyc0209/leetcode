/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  let tempPosition = -1
  while (left <= right) {
    const middlePosition = (left + (right - left) / 2) | 0
    const middleNumber = nums[middlePosition]
    if (middleNumber === target) {
      tempPosition = middlePosition
      break
    } else if (middleNumber < target) {
      left = middlePosition + 1
    } else {
      right = middlePosition - 1
    }
  }

  if (tempPosition === -1) {
    return [-1, -1]
  }

  let start = tempPosition
  let end = tempPosition
  for (let i = tempPosition - 1; i >= 0; i--) {
    if (nums[i] === target) {
      start -= 1
    } else {
      break
    }
  }
  for (let i = tempPosition + 1; i < nums.length; i++) {
    if (nums[i] === target) {
      end += 1
    } else {
      break
    }
  }

  return [start, end]
};

var searchRange2 = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  let tempPosition = -1
  while (left <= right) {
    const middlePosition = (left + (right - left) / 2) | 0
    const middleNumber = nums[middlePosition]
    if (target <= middleNumber) {
      right = middlePosition - 1
      tempPosition = right
    } else {
      left = middlePosition + 1
    }
  }

  return tempPosition
}

const result = searchRange2([1, 2, 2, 3, 3, 5], 0)
console.log(result)