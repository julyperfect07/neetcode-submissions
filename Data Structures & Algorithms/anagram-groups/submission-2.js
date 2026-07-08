class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()

        for(let i of strs){
            let key = i.split("").sort().join("")
            if(!map.has(key)) {
                map.set(key, [])
            }
            map.get(key).push(i)
        }

        return Array.from(map.values())
    }
}
