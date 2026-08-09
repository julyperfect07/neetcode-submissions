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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return []
        let res = []
        let queue = [root]
        while(queue.length > 0) {
            
            let levelSize = queue.length
            for(let i = 0 ; i < levelSize ; i++) {
                const currNode = queue.shift()
                if(i === levelSize - 1) {
                    res.push(currNode.val)
                }
                if(currNode.left) queue.push(currNode.left)
                if(currNode.right) queue.push(currNode.right)

            }
        }
        return res
    }
}
