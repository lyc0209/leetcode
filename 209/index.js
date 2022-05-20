/**
 * 暴力解法
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let count = Number.MAX_SAFE_INTEGER
  for (let slow = 0; slow < nums.length; slow++) {
    let tempCount = 0
    let sum = 0
    for (let fast = slow; fast < nums.length; fast++) {
      sum += nums[fast]
      tempCount += 1
      if (sum >= target) {
        if (tempCount < count) {
          count = tempCount
        }
        break;
      }
    }
  }
  return count === Number.MAX_SAFE_INTEGER ? 0 : count;
};

/**
 * 滑动窗口
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen2 = function(target, nums) {

  let result = Number.MAX_SAFE_INTEGER
  let sum = 0
  let left = 0

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]

    while (sum >= target) {
      result = Math.min(result, right - left + 1)
      sum -= nums[left];
      left++
    }
  }

  return result === Number.MAX_SAFE_INTEGER ? 0 : result
}

const result = minSubArrayLen2(7, [2,3,1,2,4,3])
console.log(result)