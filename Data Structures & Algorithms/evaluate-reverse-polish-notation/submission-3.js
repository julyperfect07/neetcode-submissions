class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        for(let token of tokens){
            if(token === "+"){
                stack.push(stack.pop() + stack.pop())
            } else if(token === "-"){
                let a = stack.pop()
                let b = stack.pop()
                stack.push(b - a)
            } else if(token === "*"){
                stack.push(stack.pop() * stack.pop())

            } else if(token === "/"){
                let a = stack.pop()
                let b = stack.pop()
                stack.push(Math.trunc(b / a))
            }else {
                stack.push(parseInt(token))
            } 
        }
        return stack[0]
    }
}
