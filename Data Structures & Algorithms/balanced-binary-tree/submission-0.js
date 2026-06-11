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
     * @return {boolean}
     */
    isBalanced(root) {
        if (root === null) return true;

        let leftDepth = this.maxDepth(root.left);
        let rightDepth = this.maxDepth(root.right);

        if(Math.abs(leftDepth - rightDepth) > 1){
            return false
        }

        return this.isBalanced(root.left) && this.isBalanced(root.right)
        
    }
    

    maxDepth(node){
        if (node === null) return 0;

        return 1 + Math.max(this.maxDepth(node.left), this.maxDepth(node.right));

    }
}
