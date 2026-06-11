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
        this.dfs(root, k , state)
        return state.result
    }

    dfs(node , k , state) {
        if (!node || state.result !== null) return;

        this.dfs(node.left , k , state)

        state.count++
        if(state.count === k) {
            state.result = node.val
            return
        }
        this.dfs(node.right , k , state)
    }
}
