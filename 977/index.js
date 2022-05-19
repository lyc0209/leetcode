/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  // nums = nums.map((item) => Math.abs(item));
  let result = []
  for (let i = 0, j = nums.length - 1, position = nums.length - 1; i <= j; position--) {
    const num1 = Math.pow(Math.abs(nums[i]), 2);
    const num2 = Math.pow(Math.abs(nums[j]), 2);
    if (num1 > num2) {
      result[position] = num1;
      i++;
    } else {
      result[position] = num2;
      j--;
    }
  }
  return result;
};

const result = sortedSquares([-7, -3, 2, 3, 11]);
console.log(result)
// [0,1,9,16,100]