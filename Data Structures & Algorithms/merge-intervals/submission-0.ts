class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        intervals.sort((a,b) => a[0] - b[0])
        let res = [intervals[0]]
        for(let i = 1 ; i < intervals.length ; i++){
            let curInterval = intervals[i]
            let lastMerged = res[res.length-1]
            if(curInterval[0] <= lastMerged[1]) {
                lastMerged[1] = Math.max(curInterval[1], lastMerged[1])
            }else {
                res.push(curInterval)
            }
        }
        return res
    }
}
