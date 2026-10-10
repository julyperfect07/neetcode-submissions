class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let rows = board.length
        let cols = board[0].length

        function capture(r, c) {
            if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] != "O") {
                return
            }
            board[r][c] = "T"
            capture(r + 1, c)
            capture(r - 1, c)
            capture(r, c + 1)
            capture(r, c - 1)
        }

        // mark border-connected O's as T
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (board[r][c] == "O" && ([0, rows - 1].includes(r) || [0, cols - 1].includes(c))) {
                    capture(r, c)
                }
            }
        }

        // surrounded O's -> X
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (board[r][c] == "O") {
                    board[r][c] = "X"
                }
            }
        }

        // restore T's -> O
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (board[r][c] == "T") {
                    board[r][c] = "O"
                }
            }
        }
    }
}