class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let res = new PriorityQueue((a,b ) => b - a) // max
        for(let stone of stones) {
            res.enqueue(stone)
        }
        while(res.size() > 1) {
            let x = res.dequeue()
            let y = res.dequeue()
            if(x !== y) {
                res.enqueue(x - y)
            }
            
        }
        return res.size() === 1 ? res.dequeue( ) : 0
    }
}
