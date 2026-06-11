class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {}
        for(let i = 0; i < nums.length ; i++){
            count[nums[i]] = (count[nums[i]] || 0) + 1
        }

        return [...Object.keys(count)].sort((a,b) => count[b] - count[a]).slice(0, k)
    }
}
