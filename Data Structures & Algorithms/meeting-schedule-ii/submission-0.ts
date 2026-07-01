/**
 * Definition of Interval:
 * class Interval  {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals: Interval[]): number {
        let start = intervals.map((i) => i.start).sort((a,b) => a-b)
        let end = intervals.map((i) => i.end).sort((a,b) => a-b)
        let s = 0 
        let e = 0
        let res = 0
        let count = 0

        while (s < intervals.length) {
            if(start[s] < end[e]) {
                s += 1
                count += 1
            }else {
                e += 1
                count -= 1
            }
            res = Math.max(res , count)
        }
    return res
    }
}
