var MyLinkedList = function() {
  this.nodeList = { val: Number.MIN_SAFE_INTEGER, next: null }
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  let currentNode = this.nodeList.next
  let count = 0
  while (currentNode) {
    if (count === index) {
      return currentNode.val
    }
    count += 1
    currentNode = currentNode.next
  }
  return -1
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  this.nodeList.next = {val: val, next: this.nodeList.next}
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  let currentNode = this.nodeList
  while (currentNode.next) {
    currentNode = currentNode.next
  }
  currentNode.next = { val: val, next: null }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index < 0) {
    this.addAtHead(val)
  }
  let currentNode = this.nodeList
  let count = -1
  while (currentNode.next) {
    if (count + 1 === index) {
      currentNode.next = { val: val, next: currentNode.next }
      return
    }
    count += 1
    currentNode = currentNode.next
  }
  if (count + 1 === index) {
    currentNode.next = { val: val, next: null }
  }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  let currentNode = this.nodeList
  let count = -1
  while (currentNode.next) {
    if (count + 1 === index) {
      currentNode.next = currentNode.next.next
      return
    }
    count += 1
    currentNode = currentNode.next
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

var obj = new MyLinkedList()
obj.addAtHead(7)
obj.addAtHead(2)
obj.addAtHead(1)
obj.addAtIndex(3,0)
obj.deleteAtIndex(2)
obj.addAtHead(6)
obj.addAtTail(4)
console.log(obj.get(4))
obj.addAtHead(4)
obj.addAtIndex(5,0)
obj.addAtHead(6)

// console.log(obj.get(1))
//
// let node = obj.nodeList
// while(node) {
//   console.log(node.val)
//   node = node.next
// }