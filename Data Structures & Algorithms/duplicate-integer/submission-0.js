class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seen = {}
        for(let i of nums){
            if(seen[i]){
                return true
            }else{
                seen[i] = 1
            }
        }
        return false
    }
}
