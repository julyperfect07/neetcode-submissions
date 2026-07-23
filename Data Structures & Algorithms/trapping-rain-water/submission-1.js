class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let water = 0
        let left = 0 
        let right = height.length - 1
        let maxLeft = 0
        let maxRight = 0
        while(left < right) {
            if(height[left] < height[right]) {
                if(height[left] >= maxLeft) {
                    maxLeft = height[left]
                }else {
                    let currentWater = maxLeft - height[left]
                    water += currentWater
                }
                left++
            }else {
                if(height[right] >= maxRight) {
                    maxRight = height[right]
                }else {
                    let currentWater = maxRight - height[right]
                    water += currentWater
                }
                right--
            }
        }
        return water
    }
}
