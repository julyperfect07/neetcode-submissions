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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        // Base case: if there are no nodes to process
        if (!preorder.length || !inorder.length) {
            return null;
        }
        
        // The first element of preorder is the root node
        let root = new TreeNode(preorder[0]);
        
        // Find the index of the root node in inorder traversal
        let mid = inorder.indexOf(preorder[0]);
        
        // Recursively build the left and right subtrees
        root.left = this.buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
        root.right = this.buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

        return root;
    }

    // مثال على Array
    // preorder (Root → Left → Right): [1, 2, 4, 5, 3, 6, 7]
    //inorder (Left → Root → Right): [4, 2, 5, 1, 6, 3, 7]
}
