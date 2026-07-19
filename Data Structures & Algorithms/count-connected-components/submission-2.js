class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let adj = Array.from({length : n }, () => [])

        for(let [n1,n2] of edges) {
            adj[n1].push(n2)
            adj[n2].push(n1)
        }
        let visited = new Set()
        let numberOfGraphs = 0
        function dfs(i) {
            if(visited.has(i)) return 
            visited.add(i)
            for(let j of adj[i]) {
                dfs(j)
            }
        }
        for(let i = 0 ; i < n ; i++) {
            if(!visited.has(i)) {
                numberOfGraphs++
                dfs(i)
            }
        }
        return numberOfGraphs
    }
}
