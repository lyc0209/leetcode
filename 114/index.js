function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const fn = (root, arr = []) => {
    if (!root) {
        return
    }

    arr.push(root)
    fn(root.left, arr)
    fn(root.right, arr)
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {

    const arr = []

    fn(root, arr)

    for (let i = 0; i < arr.length - 1; i++) {
        arr[i].left = null
        arr[i].right = arr[i + 1]
    }
    if (arr.length > 0) {
        arr[arr.length - 1].left = null
        arr[arr.length - 1].right = null
    }
};

// const root = new TreeNode(1)

const n3 = new TreeNode(3)
const n4 = new TreeNode(4)

const n6 = new TreeNode(6)

const n2 = new TreeNode(2, n3, n4)
const n5 = new TreeNode(5, null, n6)

const root = new TreeNode(1, n2, n5)

flatten(root)


let curr = root
while (curr) {
    console.log(curr.val)
    curr = curr.right
}


