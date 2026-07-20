class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        let dp = Array.from({length : s.length + 1} , () => false)
        dp[s.length] = true
        for(let i = s.length - 1 ; i >= 0 ; i--) {
            for(let w of wordDict) {
                if(i + w.length <= s.length && s.slice(i ,i + w.length ) === w) {
                    dp[i] = dp[i + w.length]
                }
                if(dp[i]) break
            }
        }

        return dp[0]
    }
}
