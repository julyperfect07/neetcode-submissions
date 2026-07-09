class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {}
        let freq = Array.from({length : nums.length + 1} , () => [])
        for(let i of nums) {
            map[i] = (map[i] || 0 ) + 1
        }

        for(let [n , c] of Object.entries(map)) {
            freq[c].push(Number(n)) 
        }
        let res = []

        for(let i = nums.length ; i >= 0 ; i--) {
            for(let j of freq[i]) {
                res.push(j)
                if(res.length == k) {
                    return res
                }
            }
        }
    }
}
