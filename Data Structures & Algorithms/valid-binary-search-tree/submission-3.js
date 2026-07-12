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
    isValidBST(root) {

        function dfs (node , max , min) {
            if(!node) return true
            if(node.val >= max || node.val <= min) return false 

            return dfs(node.left , node.val, min) && dfs(node.right , max, node.val)

        }

        return dfs(root , Infinity , -Infinity)
    }
}
