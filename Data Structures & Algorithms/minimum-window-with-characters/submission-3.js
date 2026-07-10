class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let tMap = {}
        for(let i of t ) {
            tMap[i] = (tMap[i] || 0 ) + 1
        }
        let window = {}
        let res = [-1, -1 ]
        let resLen = Infinity 
        let have = 0
        let need = Object.keys(tMap).length 
        let l = 0 
        for(let r = 0 ; r < s.length ; r++) {
            let char = s[r]
            window[char] = (window[char] || 0 ) + 1
            if(tMap[char] && window[char] == tMap[char]) have++
            while(have === need) {
                if((r - l + 1) < resLen) {
                    res = [l , r]
                    resLen = r - l + 1
                }
 
                window[s[l]]--
                if(tMap[s[l]] && window[s[l]] < tMap[s[l]]) have--

                l++

            }
            
        }
        let [start,end] = res
            return resLen === Infinity ? "" : s.slice(start,end + 1)
    }
}
