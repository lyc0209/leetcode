/**
 * 暴力解法
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let length = nums.length
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1] && nums[i] !== Number.MIN_SAFE_INTEGER) {
      length -= 1
      for (let j = i + 1; j < nums.length - 1; j++) {
        nums[j] = nums[j + 1]
      }
      nums[nums.length - 1] = Number.MIN_SAFE_INTEGER
      if (nums[i] === nums[i + 1]) {
        i--
      }
    }
  }
  return length
};

/**
 * 双指针解法
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates2 = function (nums) {
  if (nums.length === 0) {
    return 0
  }
  let slow = 1
  let fast = 1

  while (fast < nums.length) {
    // fast位置的值与左边的值不相等，则必然和左侧的值都不相等。
    // 相等的值一定是连续的。
    if (nums[fast - 1] !== nums[fast]) {
      nums[slow++] = nums[fast]
    }
    fast++
  }
  return nums;
}

const result = removeDuplicates2([0,0,1,1,1,2,2,3,3,4])
console.log(result)