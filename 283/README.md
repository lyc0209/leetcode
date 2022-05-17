# 移除元素

## 描述

[283. 移动零 - 力扣（LeetCode）](https://leetcode.cn/problems/move-zeroes/)

## 题解

双指针

快慢指针都从0开始，快指针遍历数组，遇到不为0的元素，`nums[slow++] = nums[fast]`。