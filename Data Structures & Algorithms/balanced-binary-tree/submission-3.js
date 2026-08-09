class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        const dfs = (node) => {
            // Base case: empty nodes have a height of 0
            if (!node) return 0;

            // Check left subtree. If it failed (-1), pass the error up.
            let left = dfs(node.left);
            if (left === -1) return -1;

            // Check right subtree. If it failed (-1), pass the error up.
            let right = dfs(node.right);
            if (right === -1) return -1;

            // Current node check: if heights differ by more than 1, fail (-1).
            if (Math.abs(left - right) > 1) return -1;

            // Otherwise, return the actual height of this subtree.
            return 1 + Math.max(left, right);
        };

        // If the root didn't return -1, the entire tree is balanced.
        return dfs(root) !== -1;
    }
}
