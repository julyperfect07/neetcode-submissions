class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n: number): number {
        let res = 0
        while (n > 0) {
            n = n & (n-1) 
            res += 1
        }

        return res
    }
}
