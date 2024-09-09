/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const res = []

    let left = 0

    for (let i = 1; i <= nums.length; i++) {
        if (nums[i] - nums[i - 1] > 1 || i === nums.length) {
            res.push(i - 1 === left ? String(nums[left]) : `${nums[left]}->${nums[i - 1]}`)
            left = i
        }
    }

    return res
};

const nums = [0,1,2,4,5,7]

const res = summaryRanges(nums)

console.log(res)