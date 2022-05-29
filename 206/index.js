/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 虚拟头节点
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  const preHead = new ListNode(Number.MIN_SAFE_INTEGER, null)
  while (head) {
    let tmp = preHead.next
    preHead.next = head
    head = head.next
    preHead.next.next = tmp
  }
  return preHead.next
};

/**
 * 无头节点
 * @param head
 * @return {null}
 */
var reverseList2 = function(head) {
  let pre = null
  let curr = head
  let tmp = null
  while (curr) {
    tmp = curr.next
    curr.next = pre
    pre = curr
    curr = tmp
  }
  return pre
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const head = new ListNode(Number.MIN_SAFE_INTEGER, null)
let curr = head
for (let i = 1; i <= 5; i++) {
  curr.next = new ListNode(i, null)
  curr = curr.next
}

const result = reverseList2(head.next)

curr = result
while (curr) {
  console.log(curr.val)
  curr = curr.next
}