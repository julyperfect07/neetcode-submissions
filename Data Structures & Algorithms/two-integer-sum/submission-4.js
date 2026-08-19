class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {}
        for(let i = 0 ; i < nums.length ; i++) {
            let num = nums[i]
            let wantedNum = target - num
            if(wantedNum in map) return [map[wantedNum] , i]
            map[num] = i 
        }
    }
}
