# 有序数组的平方

## 描述

[977. 有序数组的平方 - 力扣（LeetCode）](https://leetcode.cn/problems/squares-of-a-sorted-array/)

## 题解

1. 双指针

   指针i、`j`分别指向数组的头和尾，记录`position`为数据插入位置，初始值为`nums.length - 1` 。比较i和j位置的值，大的放新数组的position位置。