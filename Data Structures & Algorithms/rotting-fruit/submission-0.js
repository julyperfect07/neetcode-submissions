class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {

        let rows = grid.length
        let cols = grid[0].length
        let time = 0 
        let fresh = 0 
        let q = []

        const rotOrange = (r, c) => {
            if(r < 0 || c < 0 || r == rows || c == cols || grid[r][c] != 1){
                return 
            }
            q.push([r,c])
            fresh--;
            grid[r][c] = 2
        }

        for(let r = 0 ; r < rows ; r++) {
            for(let c = 0 ; c < cols ; c++) {
                if(grid[r][c] == 1) {
                    fresh++
                }
                if(grid[r][c] == 2) {
                    q.push([r,c])
                }
            }
        } 

        while(q.length > 0 && fresh > 0) {
            let size = q.length
            for(let i = 0 ; i < size ; i++) {
                let [r,c] = q.shift()
                rotOrange(r+1 , c)
                rotOrange(r - 1 , c)
                rotOrange(r , c+ 1)
                rotOrange(r , c - 1)
                
            }
            time++
        }

        return fresh == 0 ? time : -1
    }
}
