class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = {}
        for(let i of nums){
            if(map[i]) return true
            map[i] = true
        }
        return false 
    }
}
