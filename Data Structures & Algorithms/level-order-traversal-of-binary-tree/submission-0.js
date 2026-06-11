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
        let queue = [root]
        while(queue.length){
            let currentLevelNodes = []
            let length = queue.length
            let count = 0
            while(count < length){
                let currentNode = queue.shift()
                currentLevelNodes.push(currentNode.val)
                if(currentNode.left){
                    queue.push(currentNode.left)
                }
                if(currentNode.right){
                    queue.push(currentNode.right)
                }
                count++
            }
            res.push(currentLevelNodes)
        }
        return res
    }
}
