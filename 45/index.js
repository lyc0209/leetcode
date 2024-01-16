/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {

  let count = 0
  let rightIdx = nums.length - 1
  while (rightIdx > 0) {
    for (let i = 0; i < rightIdx; i++) {
      if (nums[i] + i >= rightIdx) {
        count += 1
        rightIdx = i
        break
      }
    }
  }

  return count
};

const arr = [10]
const result = jump(arr)

console.log("result: ", result)