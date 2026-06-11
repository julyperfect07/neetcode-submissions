class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 0) return 0;
        if (nums.length === 1) return nums[0];
        let rob1= 0 
        let rob2 = 0
        let rob3 =0
        let rob4 = 0 

        
        //ignore first house
        for(let i = 1 ; i < nums.length ; i++){
            let max = Math.max(nums[i]+ rob3 , rob4)
            rob3 = rob4
            rob4 = max
        }
        //ignore last house
        for(let i = 0 ; i < nums.length - 1 ; i++ ){
            
                let tmp = Math.max(nums[i] + rob1, rob2 )
                rob1 = rob2
                rob2 = tmp
            
            
        }
        return Math.max(rob2, rob4) 
    }
}
