# 105

前序遍历的第一个值为根节点，在中序遍历中找到改根节点，则它的左侧都为左子树，右侧都为右子树。

根据 中序遍历中的左子树长度，获取对应前序遍历中的左子树，截取，再递归