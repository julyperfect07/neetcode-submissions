class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let res = []

        function backTracking(str , open , close) {
            if(str.length == n * 2){
                res.push(str)
                return
            }
            if(open < n) {
                backTracking(str + "(" , open + 1, close)
            }

            if(close < open) {
                backTracking(str + ")" , open , close + 1)
            }
        }
        backTracking("" , 0 , 0)
        return res
    }
}
