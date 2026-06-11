class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let prereq = Array.from({length : numCourses}, () => [])

        for(let [crs, pre] of prerequisites){
            prereq[crs].push(pre)
        }

        let cycle = new Set()
        let visit = new Set()

        let output = []

        function dfs(crs) {
            if(cycle.has(crs)){
                return false
            }

            if(visit.has(crs)) {
                return true
            }

            cycle.add(crs)
            for(let pre of prereq[crs]){
                if (dfs(pre) == false) return false

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
