# 移除元素

## 描述

[80. 删除排序数组中的重复项 II - 力扣（LeetCode）](https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/)

## 题解

1. 系统api

   借助splice做真删除

2. 双指针

   fast和slow都从2开始，比较fast和slow-2位置的值，如果不相等则将fast位置值赋值给slow位置，slow+1。

   