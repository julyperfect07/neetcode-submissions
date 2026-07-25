class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        
        for (let i = 0; i < tokens.length; i++) {
            let token = tokens[i];
            let a, b; // Declared here to avoid switch-case scope conflicts
            
            switch (token) {
                case "+":
                    stack.push(stack.pop() + stack.pop());
                    break;
                    
                case "-":
                    a = stack.pop();
                    b = stack.pop();
                    stack.push(b - a);
                    break;
                    
                case "*":
                    stack.push(stack.pop() * stack.pop());
                    break;
                    
                case "/":
                    a = stack.pop();
                    b = stack.pop();
                    stack.push(Math.trunc(b / a));
                    break;
                    
                default: 
                    stack.push(Number(token)); // Cleaner than parseInt
            }   
        }
        return stack[0];
    }
}
