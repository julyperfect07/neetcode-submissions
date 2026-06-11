class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
       let charSeen = {}
       for(let i of s){
        charSeen[i] = (charSeen[i] || 0) + 1
       }
       for(let i of t){
        if(!charSeen[i]){
            return false
        }
        charSeen[i]--
       }
        return true
    }
}
