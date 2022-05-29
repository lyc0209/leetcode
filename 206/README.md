# 反转链表

## 描述

[206. 反转链表 - 力扣（LeetCode）](https://leetcode.cn/problems/reverse-linked-list/)

## 题解

1. 带虚拟头节点

   遍历链表，挂在头节点后面

2. 不带虚拟头节点

   定义`pre`和`curr`，`pre = null`，`curr = head`，定义`tmp`为`curr`的后面一个节点。

   ```js
   while (curr) {
     tmp = curr.next
     curr.next = pre
     pre = curr
     curr = tmp
   }
   ```

   