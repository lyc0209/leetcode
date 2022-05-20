# 长度最小的子数组

## 描述

[209. 长度最小的子数组 - 力扣（LeetCode）](https://leetcode.cn/problems/minimum-size-subarray-sum/)

## 题解

1. 暴力解法

   两层for循环

2. 滑动窗口

   窗口右侧在数组上遍历，左侧从0开始，若窗口内的和大于`target`，则不断右移左指针，每次记录窗口内的和以及子数组长度。