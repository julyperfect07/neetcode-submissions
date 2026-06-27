class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let cur_sum = 0
        let max_sum = -Infinity

        for(let i = 0 ; i < nums.length ; i++){
            cur_sum += nums[i]
            max_sum = Math.max(max_sum , cur_sum)
            if(cur_sum < 0 ) cur_sum = 0;


        }

        return max_sum
    }
}
