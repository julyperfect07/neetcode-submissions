class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {}
        for(let i = 0 ; i < nums.length ; i++ ){
            let num = nums[i]
            let value = target - num
            if(value in map){
                return [map[value] , i]
            }else{
                map[num] = i
            }
        }
        return []
    }
}
