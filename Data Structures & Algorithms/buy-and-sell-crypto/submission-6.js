class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let max = 0
        let left = 0 
        for(let right = 1 ; right < prices.length ; right++) {
            if(prices[left] < prices[right]) {
                let profit = prices[right] - prices[left]
                max = Math.max(max , profit)
            }else {
                left = right
            }
        }
        return max 
    }
}
