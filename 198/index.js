/**
 * @param {number[]} nums
 * @return {number}
 */
var robOld = function(nums) {
    if (nums.length <= 2) {
        return Math.max(nums[0], nums[1] ?? 0)
    }

    const dp = [nums[0], Math.max(nums[0], nums[1])]

    for (let i = 2; i < nums.length; i++) {
        dp.push(Math.max(dp[i - 2] + nums[i], dp[i - 1]))
    }

    return dp[dp.length - 1]
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    if (nums.length <= 2) {
        return Math.max(nums[0], nums[1] ?? 0)
    }

    const dp = nums.slice(0, 2)

    for (let i = 2; i < nums.length; i++) {

        let max = dp[i - 1]

        for (let j = 0; j < i - 1; j++) {
            if (dp[j] + nums[i] >= max) {
                max = dp[j] + nums[i]
            }
        }

        dp.push(max)
    }

    return dp[dp.length - 1]
};

// const arr = [2,7,9,3,1]
const arr = [2,1,1,2]

const res = rob(arr)

console.log(res)