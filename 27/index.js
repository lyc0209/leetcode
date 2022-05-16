/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
   let length = nums.length
   for (let i = 0; i < nums.length; i++) {
     if (nums[i] === val) {
       length -= 1
       for (let j = i; j < nums.length - 1; j++) {
         nums[j] = nums[j + 1]
       }
       nums[nums.length - 1] = -1
       i--
     }
   }
   return length
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement2 = function(nums, val) {
   let slowIndex = 0;
   for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
     if (nums[fastIndex] !== val) {
       nums[slowIndex++] = nums[fastIndex]
     }
   }
   return slowIndex
};


const result = removeElement2([3, 2, 2, 3], 3)
console.log(result)