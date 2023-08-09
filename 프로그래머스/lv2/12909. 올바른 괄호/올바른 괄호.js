function solution(s){
    let stack = 0;
    
    for(let brace of s) {
        if ((stack === 0 && brace !== ")") || brace === "(") {
            stack += 1;
        }
        else if (brace === ")" && stack !== 0) {
            stack -= 1;
        }
        else {
            return false
        }
    }
    return stack ? false : true;
}