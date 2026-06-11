class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let answer = new Array(temperatures.length).fill(0)
        let stack = []

        for(let i = 0 ; i < temperatures.length ; i++){
            let temp = temperatures[i]
            while(stack.length && temp > temperatures[stack[stack.length - 1]]){
                let index = stack.pop()
                answer[index] = i - index
            }
            stack.push(i)
        }
        return answer
    }
}
