class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""
        for(let i of strs) {
            res += i.length + "#" + i
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []
        let i = 0
        while(i < str.length){
            let j = i
            while(str[j] !== "#"){
                j++
            }
            let length = parseInt(str.slice(i, j))
            j++
            res.push(str.slice(j , j + length))
            i = j + length 
        }

        return res
    }
}
