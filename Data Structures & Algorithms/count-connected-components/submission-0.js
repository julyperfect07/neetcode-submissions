class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let adj = Array.from({length : n}, () => [])
        for(let [n1,n2] of edges){
            adj[n1].push(n2)
            adj[n2].push(n1)
        }
        let visited = new Set()
        let numberOfGraphs = 0
        function dfs (n){
            if(visited.has(n)){
                return 
            }
            visited.add(n)
            for(let i of adj[n]){
                dfs(i)
            }
            
        }
        for(let i = 0 ; i < n ; i++){
            if(!visited.has(i)){
                numberOfGraphs++
                dfs(i)
            }
        }
        return numberOfGraphs
    }
}
