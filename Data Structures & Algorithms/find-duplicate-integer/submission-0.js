class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = 0
        let fast = 0
        while(true){
            slow = nums[slow] // equals slow = slow.next 
            fast = nums[nums[fast]] // equals fast = fast.next.next
            if(slow == fast){
                break
            }
        }
        let slow2= 0
        while(true){
            slow = nums[slow]
            slow2 = nums[slow2]
            if(slow == slow2) {
                return slow
            }
        }
        
    }
}
