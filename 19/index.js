/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let preHead = new ListNode(Number.MIN_SAFE_INTEGER, head)
  let slow = preHead
  let fast = preHead
  for (let i = 0; i <= n; i++) {
    fast = fast?.next ?? null
  }
  while (fast) {
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow?.next?.next ?? null
  return preHead.next
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

const result = removeNthFromEnd(head.next, 1)

curr = result
while (curr) {
  console.log(curr.val)
  curr = curr.next
}