class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */

    constructor() {
        this.directions = [
            [-1, 0], // up
            [0, 1],  // right
            [1, 0],  // down
            [0, -1]  // left
        ];
    }
    maxAreaOfIsland(grid) {
        let rows = grid.length
        let cols = grid[0].length
        let maxArea = 0

        for(let r = 0 ; r < rows ; r++) {
            for(let c = 0 ; c < cols ;c++) {
                if(grid[r][c] == 1) {
                    maxArea = Math.max(maxArea , this.dfs(grid, r , c))
                }
            }
        }
        return maxArea
    }

    dfs(grid , r , c ) {
        if (
    r < 0 ||
    c < 0 ||
    r >= grid.length ||
    c >= grid[0].length ||
    grid[r][c] === 0
) {
    return 0;
}
        
            grid[r][c] = 0

            let area = 1

            for(let [dr, dc] of this.directions) {
                area += this.dfs(grid , r + dr , c + dc)
            }

            return area
            

        
    }
}
