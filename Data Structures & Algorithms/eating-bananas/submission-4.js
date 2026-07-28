class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 0 
        let r = Math.max(...piles)
        let res = r
        while(l <= r) {
            let m = Math.floor((r+l) / 2)
            let hours = 0
            for(let i = 0 ; i < piles.length ; i++) {
                hours += Math.ceil(piles[i] / m)
                
            }
            if(hours <= h) {
                res = Math.min(res , m)
                r = m - 1
            } else {
                l = m + 1
            }
        }
        return res
    }
}
