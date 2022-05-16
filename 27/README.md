# 移除元素

## 描述

[27. 移除元素 - 力扣（LeetCode）](https://leetcode.cn/problems/remove-element/)

## 题解

1. 暴力方法

   两层for循环，外层for循环找到值相等的地方，内层for循环从该位置开始将后一位置的值赋给前一位置。

2. 双指针

   ```js
   let slowIndex = 0;
   for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
     if (nums[fastIndex] !== val) {
       nums[slowIndex++] = nums[fastIndex]
     }
   }
   return slowIndex
   ```

   