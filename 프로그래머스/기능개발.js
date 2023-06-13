(function solution(progresses, speeds) {
    
    let 작업일 = 0;
    const result = [];
    
    for(let i = 0; i < progresses.length; i++) {
        const 진행속도 = speeds[i];
        const 남은작업 = 100 - progresses[i] - (진행속도 * 작업일);

        console.log("진행속도: ", 진행속도);
        console.log("남은작업: ", 남은작업);
        
        if(남은작업 > 0) {
            작업일 += Math.ceil( 남은작업 / 진행속도 );
            result.push(0);
        }
        result[result.length-1] += 1;
        // console.log("현재까지 소요된 일수: ", 작업일);
        console.log("진척도 " + 작업일 + "일 기준: " , result, "\n", "\n");
    }

    console.log("--------------------");
    console.log("결과값: ", result);
    console.log("--------------------");
    return result;
})([93, 30, 55],[1, 30, 5]);

