# 在排序数组中查找元素的第一个和最后一个位置

## 描述

给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

进阶：

你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？

**示例 1:**

```
输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
```

**示例 2:**

```
输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
```

**示例 3:**

```
输入：nums = [], target = 0
输出：[-1,-1]
```

**提示：**

- 0 <= nums.length <= 105
  -109 <= nums[i] <= 109
  nums 是一个非递减数组
  -109 <= target <= 109

## 题解

1. 标准二分查找，查找一个相等的位置，向左右遍历，直至找到不相等的，返回相等的范围

2. 二分查找找左边界

   ```js
   while (left <= right) {
     const middlePosition = (left + (right - left) / 2) | 0
     const middleNumber = nums[middlePosition]
     if (target <= middleNumber) {
       right = middlePosition - 1
       tempPosition = right
     } else {
       left = middlePosition + 1
     }
   }
   ```

   