# 跳跃游戏

## 描述

[55. 跳跃游戏](https://leetcode.cn/problems/jump-game/)

## 题解

维护一个数组flagArr，标记当前位置是否可达

遍历nums中每一项，用该项的步数去更新flagArr数组。

若遇到flagArr中某一项为false，即不可达，则终止。