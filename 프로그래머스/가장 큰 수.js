function solution(numbers) {
    const result = numbers.map(String).sort((a,b) => +(b+a) - (a+b)).join('');
    return BigInt(result) + '';  // 이 부분은 앞자리가 0이면 "0"을 출력하게 바꾸는게 실행속도에서 더 이득임
                                    // return result[0] === '0' ? '0' : result[0];
}