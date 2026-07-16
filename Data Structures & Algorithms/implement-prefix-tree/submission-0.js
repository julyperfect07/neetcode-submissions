class TrieNode {
    constructor() {
        this.children = {}
        this.endOfWord = false
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let cur = this.root
        for(let c of word) {
            if(!cur.children[c]) cur.children[c]= new TrieNode()
            cur = cur.children[c]
        }
        cur.endOfWord = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let cur = this.root
        for(let c of word) {
            if(!cur.children[c]) {
                return false 
            }
            cur = cur.children[c]
        }
        return cur.endOfWord
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let cur = this.root
        for(let c of prefix) {
            if(!cur.children[c]) return false 
            cur = cur.children[c]
        }

        return true 
    }
}
