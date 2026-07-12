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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let state = {count : 0 , result : null}
        function dfs(node , state) {
            if(!node || state.result !== null) return 
            dfs(node.left , state) 
            state.count++
            if(state.count === k) {
                state.result = node.val
                return 
            }
            dfs(node.right , state) 


        }
        dfs(root , state)
        return state.result 
    }
}
