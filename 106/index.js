function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (inorder.length === 0 || postorder.length === 0) {
        return null
    }

    const rootValue = postorder[postorder.length - 1]
    const root = new TreeNode(rootValue)

    const rootInorderIndex = inorder.findIndex((v) => v === rootValue)

    const inorderLeft = inorder.slice(0, rootInorderIndex)
    const inorderRight = inorder.slice(rootInorderIndex + 1)

    const postorderLeft = postorder.slice(0, inorderLeft.length)
    const postorderRight = postorder.slice(inorderLeft.length, postorder.length - 1)

    root.left = buildTree(inorderLeft, postorderLeft)
    root.right = buildTree(inorderRight, postorderRight)

    return root
};

const preorder = [9,3,15,20,7]
const inorder = [9,15,7,20,3]

const res = buildTree(preorder, inorder)

console.log(res)