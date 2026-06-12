class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {

        if(!n) return true
        let adj = Array.from({length : n } , () => [])
        for(let [n1 , n2] of edges) {
            adj[n1].push(n2)
            adj[n2].push(n1)
        }

        let visit = new Set()

        function dfs(i , prev) {
            if(visit.has(i)){
                return false
            }
            visit.add(i)
            for(let j of adj[i]){
                if(j == prev) continue
                if(!dfs(j , i) ) return false 
            }

            return true
        }

        return dfs(0 , -1) && visit.size == n
    }
}
