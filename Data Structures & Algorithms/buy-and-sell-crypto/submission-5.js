class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0 
        let left = 0
        let right = left + 1
        while(right < prices.length) {
            // عشان تضمن مافي سالب
            if(prices[left] < prices[right]) {
                let profit = prices[right] - prices[left]
                max = Math.max(max , profit)
            }else {
                left = right
            }
            right++
        }
        return max 
    }
}
