# 删除链表的倒数第 N 个结点

## 描述

[19. 删除链表的倒数第 N 个结点 - 力扣（LeetCode）](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/submissions/)

## 题解

因为题目要求遍历一次链表解决，需要使用双指针

定义虚拟头节点，方便解决删除第一个节点的情况

`slow`和`fast`初始都指向虚拟头节点

`fast`指针首先移动`n + 1`位置，

`slow`和`fast`一起移动，直到`fast`指向null，删除`slow`的下一个节点即可。

- 为什么需要移动`n + 1`？

  因为`slow`正好移动到待删除节点的前一位置，方便删除