/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const result = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 1; i++) {
    // 如果第一个数就大于0就表明后面的都大于0
    if (nums[i] > 0) {
      return result
    }
    // 去重
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let k = nums.length - 1
    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue
      }
      let temp = nums[i] + nums[j] + nums[k]
      while (j < k && temp > 0) {
        k--
        temp = nums[i] + nums[j] + nums[k]
      }
      if (j === k) {
        continue
      }
      if (temp === 0) {
        result.push([nums[i], nums[j], nums[k]])
      }
    }
  }
  return result
};

const result = threeSum([-2,0,1,1,2])
console.log(result)