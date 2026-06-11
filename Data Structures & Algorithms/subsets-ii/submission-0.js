class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let res = []
        nums.sort((a , b) => a - b)
        function backTracking(i , subset) {
            if(i === nums.length) {
                res.push([...subset])
                return
            }

            subset.push(nums[i])
            backTracking(i + 1 , subset)

            subset.pop()

            while ( i + 1 < nums.length && nums[i] == nums[i+1]){
                i++
            }
            backTracking(i + 1 , subset)
        }
        backTracking(0 , [])
        return res
    }
}
