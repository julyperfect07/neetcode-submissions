class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        let n = edges.length
        let par = Array.from({length : n + 1 }, (_, i) => i)
        let rank = new Array(n+1).fill(1)

        const find = (x) => {
            if(x != par[x]) par[x] = find(par[x])
            return par[x]
        }

        const union = (n1 , n2) => {
            const p1 = find(n1) , p2 = find(n2)
            if(p1 == p2) return false

            if(rank[p1] > rank[p2]) {
                par[p2] = p1
                rank[p1] += rank[p2]
            }else{
                par[p1] = p2
                rank[p2] += rank[p1]
            }

            return true
        }
        for(let [a , b] of edges ) {
            if(!union(a,b)) return [a,b]
        }
    }
}
