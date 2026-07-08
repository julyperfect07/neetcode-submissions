class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false 
        let seenChar = {}
        for(let i = 0 ; i < s.length ; i++) {
            let char = s[i]

            seenChar[char] = (seenChar[char] || 0 ) + 1
        }

        for(let i = 0 ; i < t.length ; i++) {
            let char = t[i]
            if(!seenChar[char]) return false
            seenChar[char] -= 1
        }

        return true 
    }
}
