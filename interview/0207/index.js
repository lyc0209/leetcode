/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 暴力解法-两层for循环
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {

  let currentB = headB
  while (headA) {
    currentB = headB
    while (currentB) {
      if (headA === currentB) {
        return headA
      }
      currentB = currentB.next
    }
    headA = headA.next
  }
  return null
};

/**
 * 数学公式
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode2 = function(headA, headB) {

  let currA = headA
  let currB = headB
  while(currA !== currB) {
    currA = currA !== null ? currA.next : headB
    currB = currB !== null ? currB.next : headA
  }
  return currA
}

/**
 * 双指针
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode3 = function(headA, headB) {

  let lenA = 0
  let lenB = 0
  let currA = headA
  let currB = headB

  while (currA) {
    lenA += 1
    currA = currA.next
  }
  while (currB) {
    lenB += 1
    currB = currB.next
  }

  currA = headA
  currB = headB

  if (lenA < lenB) {
    let diffLen = lenB - lenA
    while (diffLen > 0) {
      currB = currB.next
      diffLen -= 1
    }
  } else if (lenA > lenB) {
    let diffLen = lenA - lenB
    while (diffLen > 0) {
      currA = currA.next
      diffLen -= 1
    }
  }

  while (currA && currB) {
    if (currA === currB) {
      return currA
    }
    currA = currA.next
    currB = currB.next
  }
  return null
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const headNode1 = new ListNode(0, null)
const headNode2 = new ListNode(100, null)

let tmpNode1 = headNode1
for (let i = 1; i < 3; i++) {
  tmpNode1.next = new ListNode(i, null)
  tmpNode1 = tmpNode1.next
}


let tmpNode2 = headNode2
for (let i = 101; i < 103; i++) {
  tmpNode2.next = new ListNode(i, null)
  tmpNode2 = tmpNode2.next
}

let sameNode = new ListNode(10, null)
tmpNode1.next = sameNode
tmpNode2.next = sameNode
for (let i = 11; i < 15; i++) {
  sameNode.next = new ListNode(i, null)
  sameNode = sameNode.next
}

const result = getIntersectionNode3(headNode1.next, headNode2.next)

console.log(result)