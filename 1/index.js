/**
 * @description 两层for暴力解决
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return []
};

/**
 * @description 利用hash表，快速寻找target - nums[i]。但是将所有元素加入hash表，效率不高
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum2 = (nums, target) => {
  const numMap = {}
  for (let i = 0; i < nums.length; i++) {
    numMap[nums[i]] = i 
  }

  for (let i = 0; i < nums.length; i++) {
    const tempIndex = numMap[target - nums[i]]
    if (tempIndex !== null && tempIndex !== undefined && tempIndex !== i ) {
      return [i, tempIndex]
    }
  }

  return []
}

/**
 * @description 利用hash表，快速寻找target - nums[i]。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum3 = (nums, target) => {
  const numMap = {}

  for (let i = 0; i < nums.length; i++) {
    const tempIndex = numMap[target - nums[i]]
    if (tempIndex !== null && tempIndex !== undefined) {
      return [tempIndex, i]
    }
    numMap[nums[i]] = i
  }

  return []
}

const result = twoSum2([3, 2, 4], 6)
console.log(result)