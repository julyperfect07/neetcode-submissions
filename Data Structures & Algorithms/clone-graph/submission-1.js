class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {

        if (node === null) return null;

        const oldToNew = new Map();

        function dfs(curr) {
            // If already cloned, return it
            if (oldToNew.has(curr)) {
                return oldToNew.get(curr);
            }

            // Create copy
            const copy = new Node(curr.val);
            oldToNew.set(curr, copy);

            // Clone neighbors
            for (let neighbor of curr.neighbors) {
                copy.neighbors.push(dfs(neighbor));
            }

            return copy;
        }

        return dfs(node);
    }
}
