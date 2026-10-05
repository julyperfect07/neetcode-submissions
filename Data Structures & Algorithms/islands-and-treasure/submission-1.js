class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {

      let rows = grid.length 
      let cols = grid[0].length
      let q = []
      let visit = new Set()


      const addRoom = (r, c) => {
        if(r < 0 || c < 0 || r == rows || c == cols || visit.has(`${r},${c}`) || grid[r][c] === -1  ) {
          return
        }
        q.push([r,c])
        visit.add(`${r},${c}`)
      }

      for(let r = 0 ; r < rows ; r++) {
        for(let c = 0 ; c < cols ; c++) {
          if(grid[r][c] == 0) {
            q.push([r,c])
            visit.add(`${r},${c}`)
          }
        }
      }

      let dist = 0
      while(q.length > 0) {
        let size = q.length
        for(let i = 0 ; i < size ; i++) {
          let [r,c] = q.shift()
          grid[r][c] = dist
          addRoom(r + 1 , c)
          addRoom(r - 1 , c)
          addRoom(r , c + 1)
          addRoom(r , c - 1)

        }
          dist++
      }

      return grid
    }
}
