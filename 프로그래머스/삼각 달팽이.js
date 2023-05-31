function solution(n) {
    const iteration = n;
    let [x, y, cnt] = [0, -1, 1];
    
    const arr = Array.from({length:n}, (_, i) => Array(i+1).fill());
    
    for(let i = 0; i < iteration; i++) {
        for(let j = 0; j < n; j++) {

            if(i%3 === 0) y++;

            else if(i%3 === 1) x++;

            else { y--; x--; }

            arr[y][x] = cnt++;
        }

        n--;
    }
    
    return arr.flat();
}

solution(5);