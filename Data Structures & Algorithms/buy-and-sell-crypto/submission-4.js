class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0
        let num = prices[0]
        for(let i = 1; i < prices.length ; i++) {
            res = Math.max(res , prices[i] - num)
            num = Math.min(num, prices[i]);

        }
        return res 
    }
}
