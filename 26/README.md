# 移除元素

## 描述

[26. 删除有序数组中的重复项 - 力扣（LeetCode）](https://leetcode.cn/problems/remove-duplicates-from-sorted-array/)

## 题解

1. 暴力方法

   两层for循环，外层for循环里判断i和i+1位置的值是否相等，相等则内层for循环开始位置在外层位置加一，从后面开始依次赋值。注意连续多个相同值的情况。

2. 双指针

   fast和slow都从1开始，比较fast和fast-1位置的值，如果不相等则将fast位置值赋值给slow位置，slow+1。因为fast和fast-1位置如果不相等，则fast和左侧的值都不想等(相等的一定连续)。

   