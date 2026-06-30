class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let curSum = 0 
        let maxSum = -Infinity

        for(let i = 0 ; i < nums.length ; i++){
            curSum += nums[i]
            maxSum = Math.max(maxSum , curSum)
            if(curSum < 0) curSum = 0
        }

        return maxSum
    }
}
