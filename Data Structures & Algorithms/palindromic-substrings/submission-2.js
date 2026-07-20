class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0 
        const isPalindrome = (l , r) => {
            let found = 0
            while(l >= 0 && r < s.length && s[l] === s[r]) {
                found++
                l--
                r++
            }
            return found
        }

        for(let i = 0 ; i < s.length ; i++) {
            let l = i 
            let r = i
            count += isPalindrome(l , r)
            count += isPalindrome(l , r + 1)
        }
        return count 
    }
}
