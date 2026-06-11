class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let totalWater = 0
        let left = 0
        let right = height.length - 1
        let leftMax = 0
        let rightMax = 0
        while(left < right){
            if(height[left] < height[right]){
                if(height[left] >= leftMax){
                    leftMax = height[left]
                }else{
                    let currentWater = leftMax - height[left]
                    totalWater += currentWater
                }
                left++
            }else{
                if(height[right] >= rightMax){
                    rightMax = height[right]
                }else{
                    let currentWater = rightMax - height[right]
                    totalWater += currentWater
                }
                right--
            }
        }
        return totalWater
    }
}
