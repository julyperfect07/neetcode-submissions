class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums)
        let res = 0

        for(let num of nums) {
            if(!set.has(num - 1)) {
                let length = 0

                while(set.has(num + length )) {
                    length++
                }
                 res = Math.max(res , length)
            }
        }

        return res 
    }
}
