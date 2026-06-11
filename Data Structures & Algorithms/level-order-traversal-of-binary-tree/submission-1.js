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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return []
        let res = []
        let q = [root]
        while(q.length > 0 ) {
            let currentLevelNodes = []
            let length = q.length
            let count = 0
            while(count < length ) {
                let currentNode = q.shift()
                currentLevelNodes.push(currentNode.val)
                if(currentNode.left) {
                    q.push(currentNode.left)
                }

                if(currentNode.right) {
                    q.push(currentNode.right)
                }
                count++
            }
            res.push(currentLevelNodes)
        } 
        return res
    }
}
