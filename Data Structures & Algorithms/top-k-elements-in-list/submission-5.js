class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {}
        let freq = Array.from({length : nums.length + 1} ,  () => [])
        let res = []
        for(let num of nums) {
            map[num] = (map[num] ||0) + 1
        }
        for(let [n ,c ] of Object.entries(map)) {
            freq[c].push(Number(n))
        }

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
