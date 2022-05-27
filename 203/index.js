/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let preNode = new ListNode(-1, head)
  let result = preNode
  while(preNode.next) {
    if (preNode.next.val === val) {
      preNode.next = preNode.next.next
    } else {
      preNode = preNode.next
    }
    
  }
  return result.next
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const head = new ListNode(-1, null)
let tmpNode = head
const tmp =[]
tmp.forEach((item) => {
  tmpNode.next = new ListNode(item, null)
  tmpNode = tmpNode.next
})

let result = removeElements(head.next, 7)

while (result) {
  console.log(result.val)
  result = result.next
}