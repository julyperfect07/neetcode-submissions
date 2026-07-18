class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    constructor () {
        this.directions = [
            [-1, 0], // up
            [0, 1],  // right
            [1, 0],  // down
            [0, -1]  // left
        ];
    }
    numIslands(grid) {
        let lands = 0
        let rows = grid.length
        let cols = grid[0].length 
        for(let r = 0 ; r < rows ; r++) {
            for(let c = 0 ; c < cols ; c++) {
                if(grid[r][c] === "1") {
                    lands++
                    this.dfs(grid,r,c )
                }
            }
        }
        return lands
    }

    dfs(grid , r , c ) {
        if(r < 0 || c < 0 || r >= grid.length || c >= grid[0].length) {
            return 
        }
        if (grid[r][c] === "0") {
    return;
}
        if(grid[r][c] === "1") {
            grid[r][c] = "0"
            for(let i = 0 ; i < this.directions.length ; i++) {
                let curDirection = this.directions[i]
                let nextRow = r + curDirection[0]
                let nextCol = c + curDirection[1]
                this.dfs(grid , nextRow, nextCol)
            }
        }
    }
}
