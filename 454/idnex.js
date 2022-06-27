/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
  const map = new Map()
  let count = 0
  nums1.forEach((item1) => nums2.forEach((item2) => {
    map.set(item1 + item2, (map.get(item1 + item2) || 0) + 1)
  }))
  for (let item1 of nums3) {
    for (let item2 of nums4) {
      count += (map.get(-item1 - item2) || 0)
    }
  }
  return count
};

const arr1 = [-1,-1]
const arr2 = [-1,1]
const arr3 = [-1,1]
const arr4 = [1,-1]
const result = fourSumCount(arr1, arr2, arr3, arr4)
console.log(result)