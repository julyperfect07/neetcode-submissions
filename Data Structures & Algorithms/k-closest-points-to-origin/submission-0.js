class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let maxPQ = new PriorityQueue((a,b) => (b[0] - a[0]) )
        let res = []
        for(let [x,y] of points) {
            const dist = x ** 2 + y ** 2;
            maxPQ.enqueue([dist, x , y])
            if(maxPQ.size() > k ) {
                maxPQ.pop()
            }

        }
        while(maxPQ.size() > 0){
            const cord = maxPQ.dequeue()
            res.push([cord[1], cord[2]])

        }
        return res
    }
}
