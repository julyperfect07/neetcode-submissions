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
            let m = Math.floor((l + r) / 2);

            // Check if the middle element is the target
            if (nums[m] === target) {
                return m;
            }

            // Determine which side is sorted
            if (nums[l] <= nums[m]) {
                // Left side is sorted
                if (nums[l] <= target && target < nums[m]) {
                    r = m - 1; // Target is in the left sorted part
                } else {
                    l = m + 1; // Target is in the right unsorted part
                }
            } else {
                // Right side is sorted
                if (nums[m] < target && target <= nums[r]) {
                    l = m + 1; // Target is in the right sorted part
                } else {
                    r = m - 1; // Target is in the left unsorted part
                }
            }
        }

        return -1; // Target not found
    }
}
