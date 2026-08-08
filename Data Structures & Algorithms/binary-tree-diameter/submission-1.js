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
        if (!root) return 0;
        let max = 0
        const dfs = (node) => {
            
            let leftMax = 0
            let rightMax = 0
            if(node.left) {
                leftMax = 1 + dfs(node.left)
            }
            if(node.right){
                rightMax = 1+ dfs(node.right)
            }
            max = Math.max(max , rightMax + leftMax)
            return Math.max(rightMax, leftMax)
        }
        dfs(root)
        return max
    }
}
