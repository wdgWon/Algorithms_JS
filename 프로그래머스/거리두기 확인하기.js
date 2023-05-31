function solution(places) {
    const result = [];
    
    places.forEach(arr => {
        const position = [];
        
        arr.forEach((str, idx) => {
            for(let i = 0; i < str.length; i++) {
                if(str[i] === 'P') {
                    position.push([idx, i]);
                }
            }
        });
        
        top: 
        for(let i = 0; i < position.length; i++) {
            for(let j = i+1; j < position.length; j++) {
                const [curY, curX] = position[i];
                const [nextY, nextX] = position[j];
                const distance = Math.abs(curY-nextY) + Math.abs(curX-nextX);
                
                if(distance > 2) continue;
                
                if(distance === 1) {
                    result.push(0);
                    break top;
                }
                
                if(Math.abs(curY-nextY) === 1) {
                    // 대각선에 위치할 시 각자의 x좌표, y좌표를 바꾼 자리에 'X'가 있는지 확인
                    if(arr[curY][nextX] + arr[nextY][curX] !== 'XX') {
                        result.push(0);
                        break top;
                    }
                    continue;
                }
                
                // 한 칸 건너뛴 자리에 위치할 시 'X'가 사이에 있는지 확인
                const yDistance = curY - nextY ? curY > nextY ? -1 : 1 : 0;
                const xDistance = curX - nextX ? curX > nextX ? -1 : 1 : 0;

                if(yDistance && arr[curY+yDistance][curX] !== 'X') {
                    result.push(0);
                    break top;
                }
                else if(xDistance && arr[curY][curX+xDistance] !== 'X') {
                    result.push(0);
                    break top;
                }
            }
        }
        
        if(position.length === 0 || result.length !== places.indexOf(arr)+1) {
            result.push(1);
        }
        console.log(arr);
    });
    
    return result;
}

solution([["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]);