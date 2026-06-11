class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = {}
        for(let i of nums){
            if(map[i]){
                return true
            }else{
                map[i] = (map[i] || 0 ) + 1
            }
        }
        return false
    }
}
