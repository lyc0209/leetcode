
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const head = new ListNode(0)
    let pre = head

    let extNum = 0

    while (true) {
        const curr = new ListNode((l1?.val ?? 0) + (l2?.val ?? 0) + extNum)
        if (curr.val >= 10) {
            curr.val -= 10
            extNum = 1
        } else {
            extNum = 0
        }

        pre.next = curr
        pre = curr

        l1 = l1?.next
        l2 = l2?.next

        if (!l1 && !l2) {
            break
        }
    }
    if (extNum === 1) {
        pre.next = new ListNode(1)
    }

    return head.next
};

const l1 = new ListNode(1)
l1.next = new ListNode(2)

const l2 = new ListNode(3)
l2.next = new ListNode(4)

let res = addTwoNumbers(l1, l2)

while (true) {
    console.log(res.val)
    if (res.next) {
        res = res.next
    } else {
        break
    }
}