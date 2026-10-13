class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let prereq = Array.from({length : numCourses }, () => [])

        for(let [crs , pre] of prerequisites) {
            prereq[crs].push(pre)
        }

        let visit = new Set()
        let cycle = new Set()
        let output = []

        const dfs = ( crs ) => {
            if(cycle.has(crs)) return false
            if(visit.has(crs)) return true
            cycle.add(crs)
            for(let c of prereq[crs]) {
                if(!dfs(c)) {
                    return false
                }

                
            }
            visit.add(crs)
            output.push(crs)
            cycle.delete(crs)
            return true
        }
        for(let i = 0 ; i < numCourses ; i++) {
            if(dfs(i) == false) return []
        }
        return output
    }
}
