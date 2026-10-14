class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        // Check claude animations 
        let dict = new Set(wordList)
        if(!dict.has(endWord)) return 0
        let queue = [[beginWord, 1]]
        let visit = new Set([beginWord])
        while(queue.length > 0) {
            let [word, steps] = queue.shift()
            if(word == endWord) return steps

            for(let i = 0 ; i < word.length; i++) {
                for(let c = 97 ; c <= 122 ; c++) {
                    const next = word.slice(0 , i) + String.fromCharCode(c) + word.slice(i+1)
                    if(dict.has(next) && !visit.has(next)) {
                        queue.push([next , steps +1])
                        visit.add(next)
                    }
                }
            }
        }
        return 0
    }
}
