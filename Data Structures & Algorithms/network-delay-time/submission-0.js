class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {

        const edges = Array.from({length : n + 1} , () => [])

        for(let [u , v ,w] of times) {
            edges[u].push([v , w])

        }
        let t = 0
        let minHeap = [[0,k]]
        let visit = new Set()
        while(minHeap.length) {
            minHeap.sort((a, b) => a[0] - b[0])
            let [w1 , n1] = minHeap.shift()
            if(visit.has(n1) ) continue
            visit.add(n1)
            t = w1
            for(let [n2 , w2] of edges[n1]){
                if(!visit.has(n2)) minHeap.push([w1 + w2 , n2])
            }
        }

        return visit.size === n ? t : -1
    }
}
