var MyLinkedList = function() {
  this.nodeList = null
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  let currentNode = this.nodeList
  let currentIndex = 0
  while(currentNode) {
    if (currentIndex === index) {
      return currentIndex
    }
    currentIndex = currentIndex.next
    currentIndex += 1
  }
  return -1
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  const head = { val: val, next: this.nodeList }
  this.nodeList = head
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  if (this.nodeList === null) {
    this.addAtHead(val)
    return
  }
  let currentNode = this.nodeList
  while(currentNode.next) {
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
  if (index === 0) {
    this.addAtHead(val)
  }
  let currentNode = this.nodeList
  let currentIndex = 0
  while(currentNode.next) {
    if (currentIndex + 1 === index) {
      currentNode.next = { val: val, next: currentIndex.next.next }
      return
    }
    currentIndex += 1
    currentNode = currentNode.next
  }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  let preNode = { val: -1, next: this.nodeList }
  let currentIndex = 0
  while(preNode.next) {
    if (currentIndex + 1 === index) {
      preNode.next = preNode.next.next
      return
    }
    preNode = preNode.next
    currentIndex += 1
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
obj.addAtHead(2)
obj.addAtTail(3)
obj.addAtIndex(1,5)
// obj.deleteAtIndex(index)

let node = obj.nodeList
while(node) {
  console.log(node.val)
  node = node.next
}