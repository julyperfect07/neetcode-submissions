class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let state = { count: 0, result: null }; // Use an object to hold count and result
        this.dfs(root, k, state);
        return state.result;
    }

    dfs(node, k, state) {
        if (!node || state.result !== null) return;

        this.dfs(node.left, k, state);

        state.count++; // Increment count
        if (state.count === k) {
            state.result = node.val; // Store result when count reaches k
            return;
        }

        this.dfs(node.right, k, state);
    }
}
