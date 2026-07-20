class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let res = nums[0]
        let curMin = 1
        let curMax = 1
        for(let num of nums) {
            if(num === 0) {
                res = Math.max(res , 0)
                curMin = 1
                curMax = 1
                continue
            }
            let tmp = num * curMax
            curMax = Math.max(curMax * num , num * curMin , num)
            curMin = Math.min(num * curMin , tmp , num)
            res = Math.max(res , curMax)
        }
        return res 
    }
}
