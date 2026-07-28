class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length
        let cols = matrix[0].length


        let top = 0
        let bot = rows - 1
        while(top <= bot) {
            let middleRow = Math.floor((top + bot) / 2)
            if(target > matrix[middleRow][cols - 1]) {
                top = middleRow + 1
            }else if ( target < matrix[middleRow][0]) {
                bot = middleRow - 1
            }else {
                break
            }

        }
        if(top > bot) return false 
        let row = Math.floor((top + bot) / 2)
        let l = 0
        let r = cols - 1
        while(l <= r) {
            let m = Math.floor((l + r) / 2)
            if(target > matrix[row][m]) {
                l = m + 1
            }else if (target < matrix[row][m]){
                r = m - 1
            }else {
                return true
            }
        }
        return false
    }
}
