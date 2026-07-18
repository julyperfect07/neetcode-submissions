/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(node === null) return null

        let oldToNew = new Map()
        function dfs(curr) {
            if(oldToNew.get(curr)) {
                return oldToNew.get(curr)
            }

            let copy = new Node(curr.val)
            oldToNew.set(curr , copy)
            for(let neighbor of curr.neighbors) {
                copy.neighbors.push(dfs(neighbor))
            }

            return copy
        }

        return dfs(node)
    }
}
