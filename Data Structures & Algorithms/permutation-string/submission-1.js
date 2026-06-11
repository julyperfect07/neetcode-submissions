class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false

        let s1Map = new Array(26).fill(0)
        let s2Map = new Array(26).fill(0)
        for(let i = 0 ; i < s1.length ; i++){
            s1Map[s1.charCodeAt(i) - 97 ]++
            s2Map[s2.charCodeAt(i) - 97 ]++
        }

        for(let r = 0 ; r < s2.length - s1.length ; r++){
            if(this.arrayIsEqual(s1Map , s2Map)) return true

            s2Map[s2.charCodeAt(r) - 97 ]--
            s2Map[s2.charCodeAt(r + s1.length) - 97 ]++
        }
        return this.arrayIsEqual(s1Map, s2Map)

    }
    arrayIsEqual(arr1, arr2){
        for(let i = 0 ; i < 26 ; i++){
            if(arr1[i] !== arr2[i]) {
                return false
            } 
        }
        return true
    }
}