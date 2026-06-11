class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {}
        for(let i of nums){
            if(count[i]) {
                count[i] += 1
            }else{
                count[i] = 1
            }
        }
        return [...Object.keys(count).sort((a,b) => count[b] - count[a]).slice(0, k )]
    }
}
