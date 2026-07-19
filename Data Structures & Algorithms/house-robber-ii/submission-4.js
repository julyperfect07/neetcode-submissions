class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 0) return 0;
        if (nums.length === 1) return nums[0];
        return Math.max(this.max(nums.slice(1)) , this.max(nums.slice(0 , nums.length - 1)))
    }

    max(nums) {
        let rob1 = 0
        let rob2 = 0
        for(let i of nums) {
            let tmp = Math.max(i + rob1 , rob2)
            rob1= rob2
            rob2 = tmp
        }
        return rob2
    }
}
