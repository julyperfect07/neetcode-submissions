class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = {}
        let maxf = 0 
        let res = 0
        let left = 0 
        for(let right = 0 ; right < s.length ; right++) {
            count[s[right]] = (count[s[right]] || 0) + 1
            maxf = Math.max(maxf , count[s[right]])
            while((right - left + 1) - maxf > k)  {
                count[s[left]]--
                left++
            }
            res = Math.max(res , (right - left + 1))
        }
        return res 
    }
}
