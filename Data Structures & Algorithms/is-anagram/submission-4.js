class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        let charSeen = {}
        for(let i = 0 ; i < s.length ; i++){
            if(charSeen[s[i]]){
                charSeen[s[i]] += 1
            }else{
                charSeen[s[i]] = 1
            }
        }
        for(let i = 0 ; i < t.length ; i++){
            if(!charSeen[t[i]]){
                return false
            }else{
                charSeen[t[i]]--
            }
        }
        return true 
    }
}
