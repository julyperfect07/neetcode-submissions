class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let map = new Set(nums)
        let longest = 0
        for(let i of nums) {
            if(!map.has(i - 1)){
                let length = 0
                while(map.has(i+ length)){
                    length++
                }
                longest = Math.max(longest , length)
            }
            
        }
        return longest
    }
}
