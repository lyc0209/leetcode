/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const set1 = new Set()
  const set2 = new Set()
  nums1.map(item => set1.add(item))


  nums2.map((item) => {
    if (set1.has(item)) {
      set2.add(item)
    }
  })

  return Array.from(set2)
};

const arr1 = [4, 9, 5]
const arr2 = [9, 4, 9, 8, 4]
const result = intersection(arr1, arr2)
console.log(result)