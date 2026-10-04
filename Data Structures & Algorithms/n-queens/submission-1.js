class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        let col = new Set()
        let posDiag = new Set()
        let negaDiag = new Set()
        let res = []
        const board = Array.from({ length: n }, () => Array(n).fill("."));

        const backtrack = (r) => {
            if(r == n) {
                res.push(board.map(row => row.join("")))
                return
            }
            for(let c = 0 ; c < n ; c++) {
                if(col.has(c) || posDiag.has(r + c) || negaDiag.has(r -c )) {
                    continue
                }
                col.add(c)
                posDiag.add(r + c)
                negaDiag.add(r - c)
                board[r][c] = "Q"

                backtrack(r + 1)


                col.delete(c)
                posDiag.delete(r + c)
                negaDiag.delete(r - c)
                board[r][c] = "."
            }
        }
        backtrack(0)
        return res 
    }
}
