class TrieNode {
    constructor() {
        this.children = {}
        this.endOfWord = false
    }

    addWord(word) {
        let cur = this
        for(let c of word) {
            if(!cur.children[c]) {
                cur.children[c] = new TrieNode()
            }
            cur = cur.children[c]
        }
        cur.endOfWord = true
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        let root = new TrieNode()
        let rows = board.length
        let cols = board[0].length
        let res = new Set()
        let visit = new Set()
        for(let word of words) {
            root.addWord(word)
        }
        function dfs (r , c , node , word ) {
            if(r < 0 || c < 0 || r >= rows || c >= cols || !(node.children[board[r][c]] )|| visit.has(`${r},${c}`)) {
                return 
            }
            visit.add(`${r},${c}`)
            node = node.children[board[r][c]]
            word += board[r][c]
            if(node.endOfWord) {
                res.add(word)
            }

            dfs(r + 1, c , node , word)
            dfs(r  - 1, c , node , word)
            dfs(r , c + 1, node , word)
            dfs(r , c  - 1, node , word)
            visit.delete(`${r},${c}`)
        }
        for(let r = 0 ; r < rows ; r++) {
            for(let c = 0 ; c < cols ; c++) {
                dfs(r , c , root , "")
            }
        }

        return Array.from(res)
    }
}
