/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let leftIndex = 0
  let rightIndex = 0

  while (true) {
    if (leftIndex >= nums.length) {
      break
    }
    rightIndex = leftIndex

    while (nums[rightIndex + 1] === nums[leftIndex]) {
      rightIndex += 1
    }

    if (rightIndex - leftIndex > 1) {
      nums.splice(leftIndex, rightIndex - leftIndex - 1)
    }

    if (nums[leftIndex] === nums[leftIndex + 1]) {
      leftIndex = leftIndex + 1
    } else {
      leftIndex += 1
    }
  }

  return nums.length
};

/**
 * @desc 双指针解法
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates2 = function(nums) {
  if (nums.length <= 2) {
    return nums.length
  }

  let slow = 2
  let fast = 2

  while (fast < nums.length) {
    if (nums[fast] !== nums[slow - 2]) {
      nums[slow] = nums[fast]
      slow += 1
    }
    fast += 1
  }

  return slow
}


const arr = [1,1,1,2,2,3]
const result = removeDuplicates2(arr)

console.log(result)