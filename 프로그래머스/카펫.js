function solution(brown, yellow) {
    for(let i = 1; ; i++) {
        let col = yellow/i + 2;
        let row = i + 2;
        if(col * row === brown + yellow)
            return [col, row];
    }
}