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
        let res = []
        let q = [root]

        while(q.length > 0){
            let currentNode = q.shift()
            res.push(currentNode.val)
            if(currentNode.left){
                q.push(currentNode.left)
            }
            if(currentNode.right){
                q.push(currentNode.right)
            }
        }
        return res.sort((a,b) => a - b)[k - 1]
    }
}
