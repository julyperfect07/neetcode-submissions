class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            let m = Math.floor((r + l) / 2);

            // Example: nums = Array(4, 5, 6, 7, 0, 1, 2), target = 7
            if (nums[m] === target) return m;

            if (nums[m] >= nums[l]) {
                // Example: nums = Array(4, 5, 6, 7, 0, 1, 2), target = 5
                if (target >= nums[l] && target < nums[m]) {
                    r = m - 1;
                } 
                // Example: nums = Array(4, 5, 6, 7, 0, 1, 2), target = 1
                else {
                    l = m + 1;
                }
            } 
            else {
                // Example: nums = Array(6, 7, 0, 1, 2, 4, 5), target = 2
                if (target > nums[m] && target <= nums[r]) {
                    l = m + 1;
                } 
                // Example: nums = Array(6, 7, 0, 1, 2, 4, 5), target = 7
                else {
                    r = m - 1;
                }
            }
        }
        return -1;
    }
}