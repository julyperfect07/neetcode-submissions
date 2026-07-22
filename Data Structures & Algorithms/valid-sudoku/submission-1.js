class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let cols = Array.from({length : 9} , () => new Set())
        let rows = Array.from({length : 9} , () => new Set())
        let squares = Array.from({length : 9} , () => new Set())

        for(let r = 0 ; r < 9 ; r++) {
            for(let c = 0 ; c < 9 ; c++) {
                let num = board[r][c]
                if(num === ".") continue
                const squareIndex =
                    Math.floor(r / 3) * 3 + Math.floor(c / 3);
                if(cols[c].has(num) ||
                   rows[r].has(num) ||
                   squares[squareIndex].has(num) 
                ){
                    return false
                } 
                cols[c].add(num)
                rows[r].add(num)
                squares[squareIndex].add(num)
            }
        }

        return true 
    }
}
