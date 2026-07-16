class TrieNode {
    constructor() {
        this.children = {}
        this.endOfWord = false
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let cur = this.root

        for(let c of word) {
            if(!cur.children[c]) {
                cur.children[c] = new TrieNode()
            }
            cur = cur.children[c]

        }
        cur.endOfWord = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        function dfs (j, root) {
            let cur = root

            for(let i =j  ; i < word.length ; i++) {
                let c = word[i]
                if(c === ".") {
                    for(let child of Object.values(cur.children)) {
                        if(dfs(i+ 1 , child )) {
                            return true
                        }
                        
                        
                    }
                    return false 

                }else {
                    if(!cur.children[c])return false
                    cur = cur.children[c]
                }
            }

            return cur.endOfWord
        }

        return dfs(0 , this.root)
    }
}
