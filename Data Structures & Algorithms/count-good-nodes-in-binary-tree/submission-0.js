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
    goodNodes(root) {
        let count = 0
        function dfs(greatest , node ) {
            if(node == null) return 
            let largest = greatest
            if(node.val >= largest  ){
                largest = node.val
                count++
            }
            dfs(largest , node.right)
            dfs(largest , node.left)
        }
        dfs(root.val, root)
        return count
    }

   
}
