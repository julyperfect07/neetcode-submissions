class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let res = nums[0]
        let currMax = 1 
        let currMin = 1

        for(let num of nums) {
            if(num === 0 ){
                res = Math.max(res , 0)
                currMax = 1
                currMin = 1 
                continue
            }
            let tmp = num * currMax
            currMax = Math.max(num * currMax , num * currMin , num )
            currMin = Math.min(tmp , num * currMin , num)
            res = Math.max(res , currMax)
        }

        return res
    }
}
