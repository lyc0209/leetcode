# 水果成篮

## 描述

[904. 水果成篮 - 力扣（LeetCode）](https://leetcode.cn/problems/fruit-into-baskets/)

## 题解

1. 滑动窗口

   注意最多只能取两种不同种类的水果。

   记录左篮子`leftNumber`、右篮子`rightNumber`。 

   左指针从0开始，右指针遍历数组。

   - 若遇到种类和左篮子或者右篮子种类相同，则取字串长度、右指针右移

   - 若都不同，则让左指针`start = end - 1`，从后往前开始遍历，找相同种类的水果，记录左侧的位置为左指正`start`。同时更新左篮子`leftNumber`、右篮子`rightNumber`。