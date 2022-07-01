# 三数之和

## 描述

[[15. 三数之和 - 力扣（LeetCode）](https://leetcode.cn/problems/3sum/)](https://leetcode.cn/problems/4sum-ii/)

## 题解

1. 一层for循环遍历数组，index为i
2. 令j = i + 1;k = nums.length - 1;
3. 循环k--，直到nums[i] + nums[j] + nums[k] = 0