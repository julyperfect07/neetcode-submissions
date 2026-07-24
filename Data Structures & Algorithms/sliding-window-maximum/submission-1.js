class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let left = 0
        let right = k  - 1
        let res = []
        while(right < nums.length) {
            let currMax = -Infinity
            for(let i = left ; i <= right ; i++) {
                currMax = Math.max(currMax , nums[i])

            }
            res.push(currMax)
            left++
            right++
        }
        return  res 
    }
}
