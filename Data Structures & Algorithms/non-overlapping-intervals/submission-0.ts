class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals: number[][]): number {
        intervals.sort((a , b) => a[0] - b[0])
        let res = 0
        let prevEnd = intervals[0][1]
        for(let [start, end] of intervals) {
            if(start >= prevEnd) {
                prevEnd = end
            }else {
                res +=1
                prevEnd = Math.min(end , prevEnd)
            }
        }
        return res -1 

    }
}
