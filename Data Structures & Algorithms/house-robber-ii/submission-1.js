class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 0) return 0;
        if (nums.length === 1) return nums[0];
        let ignoreLast = this.robLinear(nums.slice(0 , nums.length - 1))
        let ignoreFirst = this.robLinear(nums.slice(1));

        return Math.max(ignoreLast, ignoreFirst)
    }
    robLinear(arr){
        let rob1 = 0 
        let rob2 = 0
        for(let i = 0 ; i < arr.length; i++){
            let tmp = Math.max(arr[i] + rob1 , rob2)
            rob1 = rob2 
            rob2 = tmp 
        }
        return rob2
    }
}
