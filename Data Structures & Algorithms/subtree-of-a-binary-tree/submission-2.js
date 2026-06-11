class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!root && !subRoot) return true;
        if (!subRoot) return true;
        if (!root) return false;

        if (this.isSameTree(root, subRoot)) {
            return true;
        }

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    isSameTree(p, q) {
        if (!p && !q) return true;
        if (!p || !q || p.val !== q.val) return false;

        return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    }
}
