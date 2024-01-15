/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  if (k === 0 || k % nums.length === 0) {
    return
  }
  if (k > nums.length) {
    k = k % nums.length
  }

  const splitArr = nums.splice(nums.length - k)
  nums.unshift(...splitArr)

}

const arr = [-1,-100,3,99]
const k = 2

rotate(arr, k)

console.log(arr)