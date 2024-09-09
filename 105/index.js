
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) {
        return null
    }

    const rootValue = preorder[0]
    const root = new TreeNode(rootValue)

    const rootInOrderIndex = inorder.findIndex((v) => v === rootValue)

    const inorderLeft = inorder.slice(0, rootInOrderIndex)
    const inorderRight = inorder.slice(rootInOrderIndex + 1)

    const preorderLeft = preorder.slice(1, inorderLeft.length + 1)
    const preorderRight = preorder.slice(inorderLeft.length + 1)

    root.left = buildTree(preorderLeft, inorderLeft)
    root.right = buildTree(preorderRight, inorderRight)

    return root
};

const preorder = [3,9,20,15,7]
const inorder = [9,3,15,20,7]

const res = buildTree(preorder, inorder)

console.log(res)