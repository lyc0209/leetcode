/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {

  let maxCount = -1
  const dp = new Array(nums.length + 1).fill(0).map(() => {
    return {
      count: 0,
      num: Number.MIN_SAFE_INTEGER
    }
  })

  for(let i = 1; i <= nums.length; i++) {
    let maxCountObj = {
      count: -1,
      index: -1
    }

    for (let j = i - 1; j >= 0; j--) {
      if (nums[i - 1] > dp[j].num && dp[j].count > maxCountObj.count) {
        maxCountObj.index = j
        maxCountObj.count = dp[j].count
      }
    }

    if (maxCountObj.index !== -1) {
      dp[i].count = maxCountObj.count + 1
      dp[i].num = nums[i - 1]
    }

    maxCount = Math.max(maxCount, dp[i].count)
  }

  return maxCount
};

// console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))
// console.log(lengthOfLIS([0,1,0,3,2,3]))
console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6]))