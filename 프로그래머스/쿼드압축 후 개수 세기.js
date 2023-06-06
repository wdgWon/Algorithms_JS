function solution(arr) {
    const answer = [0, 0];
    
	// 최상단좌측좌표 (x,y), N: 탐색 범위 길이
    function compress(x, y, N) {
        const num = arr[x][y];
        for(let i = x; i < x + N; i++) {
            for(let j = y; j < y + N; j++) {
                if (arr[i][j] !== num) {
                    N /= 2;
                    compress(x, y, N);
                    compress(x+N, y, N);
                    compress(x, y+N, N);
                    compress(x+N, y+N, N);
                    return;
                }
            }
            console.log(x,y,N,num);
            answer[num] += 1;
        }
    }
		  
    compress(0, 0, arr.length);
    console.log(answer);
    return answer;
}

solution([[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]]);