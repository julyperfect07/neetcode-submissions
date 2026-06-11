class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        if(!s || s[0] == 0) return 0

        let prev1 = 1
        let prev2 = 1
        for(let i = 1 ; i < s.length ; i++){
            let curr = 0 
            let oneDigit = parseInt(s[i])
            let twoDigit = parseInt(s[i-1]+s[i])
            if(oneDigit >= 1 && oneDigit <= 9){
                curr += prev1
            }

            if(twoDigit >= 10 && twoDigit <= 26){
                curr += prev2
            }
            prev2 = prev1
            prev1 = curr
        }
        return prev1
    }
}
