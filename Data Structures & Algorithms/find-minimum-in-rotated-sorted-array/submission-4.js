class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        
        let res = nums[0]
        let l = 0 
        let r = nums.length - 1
        while (l <= r) {
            if(nums[l] < nums[r]) {
                res = Math.min(res , nums[l])
                break
            }
            let mid = Math.floor((r+l) / 2)
            res = Math.min(res , nums[mid])
            // mid in the left portion 
            // nums = [4, 5, 6, 7, 0, 1, 2]
            if(nums[mid] >= nums[l]) {
                l = mid + 1

            // mid in the right portion 
            // nums = [6, 7, 0, 1, 2, 4, 5]
            }else {
                r = mid - 1
            }
        }

        return res 
    }
}
