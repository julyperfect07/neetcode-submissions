/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        if(root === null ) return 0
        this.max = 0
        this.maxDepth(root)
        return this.max
        
    }

    maxDepth(node) {
        if(node === null) return 0

        let leftDepth = this.maxDepth(node.left)
        let rightDepth = this.maxDepth(node.right)

        this.max = Math.max(this.max , leftDepth + rightDepth)

        return 1 + Math.max(leftDepth, rightDepth);
       }
}
