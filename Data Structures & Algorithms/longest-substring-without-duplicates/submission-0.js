class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let charSet = new Set()
        let left = 0
        let res = 0
        for(let r = 0 ; r < s.length; r++){
            while(charSet.has(s[r])){
                charSet.delete(s[left])
                left++
            }
            charSet.add(s[r])
            res = Math.max(res , (r - left + 1))
        }
        return res
    }
}
