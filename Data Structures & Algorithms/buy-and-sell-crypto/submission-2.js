class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0
        let left = 0 
        let right = left + 1
        while(left < right && right < prices.length ){
            if(prices[right] - prices[left] < 0){
                left++
                right = left + 1
            }else{
                max = Math.max(max ,prices[right] - prices[left] )
                right++
            }
        }
        return max 
    }
}
