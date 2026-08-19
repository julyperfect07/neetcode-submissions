class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        let seenChar = {}
        for(let char of s) {
            seenChar[char] = (seenChar[char] || 0 ) + 1

        }
        for(let char of t) {
            if(!seenChar[char]) return false
            seenChar[char]--
        }
        return true
    }
}
