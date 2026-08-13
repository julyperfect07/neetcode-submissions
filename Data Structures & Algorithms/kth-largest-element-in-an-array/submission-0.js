class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let minPQ = new PriorityQueue((a, b) => a - b)
        for(let num of nums) {
            minPQ.enqueue(num)
            if(minPQ.size() > k) {
                minPQ.dequeue()
            }
        }
        return minPQ.dequeue()
    }
}
