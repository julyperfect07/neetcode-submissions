class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0
        let r = nums.length - 1
        while(l <= r) {
            let mid = r - l / 2
            if(nums[mid] === target) return mid
            if(nums[mid] > target) r = mid - 1
            if(nums[mid] < target) l = mid + 1

        }
        return -1 
    }
}
