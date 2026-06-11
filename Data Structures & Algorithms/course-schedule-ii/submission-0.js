class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let prereq = Array.from({length : numCourses}, () => [])

        for(let [crs, pre ] of prerequisites){
            prereq[crs].push(pre)
        }

        let visit = new Set()
        let cycle = new Set()

        let output = []

        function dfs(crs) {
            if(cycle.has(crs)) {
                return false
            }

            if(visit.has(crs)){
                return true
            }

            cycle.add(crs)
            for(let pre of prereq[crs]) {
                if (dfs(pre) == false) return false
            }

            cycle.delete(crs)
            visit.add(crs)
            output.push(crs)


            return true
        }

        for(let c = 0 ; c < numCourses ; c++) {
            if(dfs(c) == false) return []
        }

        return output 

    }
}
