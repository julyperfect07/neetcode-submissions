class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = []
        let res = new Array(temperatures.length).fill(0)
        for(let i =0 ; i < temperatures.length ; i++) {
            let tmp = temperatures[i]
            while(stack.length && tmp > temperatures[stack[stack.length - 1]]) {
                let prevIndex = stack.pop()
                res[prevIndex] = i - prevIndex
            }
            stack.push(i)
        }
        return res
    }
}
