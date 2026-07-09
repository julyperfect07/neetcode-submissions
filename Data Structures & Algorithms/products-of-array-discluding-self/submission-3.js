class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = []
        let preFix = 1
        for(let i = 0 ; i < nums.length ; i++) {
            res[i] = preFix
            preFix = preFix * nums[i]
        }

        let postFix = 1
        for(let i = nums.length - 1; i >= 0 ; i--) {
            res[i] = res[i] * postFix
            postFix = postFix * nums[i]
        }

        return res 
    }
}
