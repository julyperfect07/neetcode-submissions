class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let word = ''
        let longest = 0
        for(let i = 0 ; i < s.length ; i++){
            let left = i
            let right = i 
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                if (right - left + 1 > longest) {
                    longest = right - left + 1;
                    word = s.slice(left, right + 1);
                }
                left--;
                right++;
            }
            left = i 
            right = i + 1
            while (left >= 0 && right < s.length && s[left] === s[right]){
                if (right - left + 1 > longest) {
                    longest = right - left + 1;
                    word = s.slice(left, right + 1);
                }
                left--;
                right++;
            }
        }
        
        return word 
    }
}
