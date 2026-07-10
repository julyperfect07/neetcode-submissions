class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let charSet = new Set()
        let max = 0
        let left = 0 
        for(let right = 0 ; right < s.length ; right++) {
            while(charSet.has(s[right])) {
                charSet.delete(s[left])
                left++
            }
            charSet.add(s[right])
            max = Math.max(max , right - left + 1)
        }
        return max 
    }
}
