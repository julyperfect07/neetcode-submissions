class Solution {
    constructor() {
        this.directions = [
            [-1, 0],
            [0, 1],
            [1, 0],
            [0, -1]
        ];
    }

    numIslands(grid) {
        let islands = 0;

        const rows = grid.length;
        const cols = grid[0].length;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === "1") {
                    islands++;
                    this.dfs(grid, r, c);
                }
            }
        }

        return islands;
    }

    dfs(grid, r, c) {
        if (
            r < 0 ||
            c < 0 ||
            r >= grid.length ||
            c >= grid[0].length
        ) {
            return;
        }

        if (grid[r][c] === "0") {
            return;
        }

        grid[r][c] = "0";

        for (const [dr, dc] of this.directions) {
            this.dfs(grid, r + dr, c + dc);
        }
    }
}