class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seen = new Set()
        for(let i of nums) {
            if(seen.has(i)) {
                return true
            }
            seen.add(i)
        }
        return false
    }
}
