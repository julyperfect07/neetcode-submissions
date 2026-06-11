class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        
        let tMap = {}
        for(let char of t) {
            tMap[char] = (tMap[char] || 0 ) + 1
        }
        let window = {}
        let have = 0 , need = Object.values(tMap).length
        let res = [-1, -1]
        let resLen = Infinity
        let l = 0
        for(let r = 0 ; r < s.length ; r++){
            let char = s[r]
            window[char] = (window[char] || 0) + 1
            if(tMap[char] && window[char] === tMap[char]){
                have++
            }
            while(have === need){
                if((r - l + 1 < resLen)){
                    res = [l , r]
                    resLen = r - l + 1
                }
                window[s[l]]--
                if(tMap[s[l]] && window[s[l]] < tMap[s[l]]){
                    have--
                }
                l++
                
            }
        }
        let [start , end] = res
        return resLen === Infinity ? '' : s.slice(start , end  + 1)
    }
}
