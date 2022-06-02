/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  const nodeSet = new Set()
  let currentNode = head
  while (currentNode) {
    if (nodeSet.has(currentNode)) {
      return currentNode
    } else {
      nodeSet.add(currentNode)
    }

    currentNode = currentNode.next
  }
  return null
};


function ListNode(val) {
  this.val = val;
  this.next = null;
}

const headNode = new ListNode(0, null)
let tmpNode = headNode
let lastNode = null
for (let i = 1; i < 5; i++) {
  tmpNode.next = new ListNode(i, null)
  tmpNode = tmpNode.next
  if (i === 4) {
    lastNode = tmpNode
  }
}
tmpNode = headNode
for (let i = 0; i < 3; i++) {
  tmpNode = tmpNode.next
}
lastNode.next = tmpNode

const result = detectCycle(headNode.next)
console.log(result)