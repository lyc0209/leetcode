/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (head == null) {
    return head
  }
  let pre = new ListNode(Number.MIN_SAFE_INTEGER, head)
  head = pre
  let first = pre.next
  let second = first.next
  while (first && second) {
    let nextNode = second.next
    pre.next = second
    second.next = first
    first.next = nextNode

    pre = first
    first = pre.next
    if (first == null) {
      break
    }
    second = first.next
  }
  return head.next
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

const result = swapPairs(head.next)

curr = result
while (curr) {
  console.log(curr.val)
  curr = curr.next
}

