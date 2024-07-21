function _Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
}


/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {

    head = new _Node(0, head)

    const newHead = new _Node(0)

    const cache = new Map()

    let curr = head.next

    let newCurr = newHead

    while (curr) {
        newCurr.next = new _Node(curr.val)

        cache.set(curr, newCurr.next)

        curr = curr.next
        newCurr = newCurr.next
    }

    curr = head.next
    newCurr = newHead.next
    while (curr) {
        newCurr.random = cache.get(curr.random)

        curr = curr.next
        newCurr = newCurr.next
    }

    return newHead
};

const head = new _Node(0)

const p1 = new _Node(1)
const p2 = new _Node(2)

head.next = p1
p1.next = p2

p1.random = p2
p2.random = p2

let res = copyRandomList(head)

while (res.next) {
    res = res.next
    console.log(res.val, res.random.val)
}
