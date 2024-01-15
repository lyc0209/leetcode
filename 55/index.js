/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (nums.length === 1) {
    return true
  }

  const flagArr = Array(nums.length).fill(false)
  flagArr[0] = true

  for (let i = 0; i < nums.length; i++) {
    if (!flagArr[i]) {
      return false
    }
    for (let j = 0; j <= nums[i]; j++) {
      if (i + j > nums.length - 1) {
        return true
      }
      flagArr[i + j] = true
    }
  }

  return flagArr[nums.length - 1]
};

const arr = [3,2,1,0,4]

const result = canJump(arr)

console.log(result)