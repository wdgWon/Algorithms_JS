function solution(m, n, puddles) {
    const memo = Array.from({ length: n }, () => Array(m).fill(1));
 
    // 물웅덩이 위치 표시
    for (let [j, i] of puddles) {
       memo[i - 1][j - 1] = 0;
    }
 
 //    // 데이터 흐름 파악용
 //    for (let k = 0; k < n; k++) {
 //       console.log(...memo[k].map((e) => ("" + e).padStart(3)));
 //    }
 //    console.log(" ");
 
 //    //
    for (let i = 0; i < n; i++) {
     //   console.log(" ");
 
       for (let j = 0; j < m; j++) {
          if (i === 0 && j === 0) continue;
          if (!memo[i][j]) continue;
          if (!i || !j) {
             memo[i][j] = i ? memo[i - 1][j] : memo[i][j - 1];
             continue;
          }
          let [left, above] = [memo[i][j - 1], memo[i - 1][j]];
          memo[i][j] = (left + above) % 1000000007;
       }
 
     //   // 데이터 흐름 파악용
     //   for (let k = 0; k < n; k++) {
     //      console.log(...memo[k].map((e) => ("" + e).padStart(3)));
     //   }
     //   console.log(" ");
    }
    
    console.log(memo[n-1][m-1]);
 }



// function solution(m, n, puddles) {
//    const memo = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

//    // 물웅덩이 위치 표시
//    for (let [j, i] of puddles) {
//       memo[i][j] = -1;
//    }

//    memo[0][1] = 1;

//    // 데이터 흐름 파악용
//    for (let k = 0; k <= n; k++) {
//       console.log(...memo[k].map((e) => ("" + e).padStart(3)));
//    }
//    console.log(" ");

//    //
//    for (let i = 1; i <= n; i++) {
//       console.log(" ");

//       for (let j = 1; j <= m; j++) {
//          if (memo[i][j] === -1) memo[i][j] = 0;
//          else {
//          let [left, above] = [memo[i][j - 1], memo[i - 1][j]];
//          memo[i][j] = (left + above) % 1000000007;
//          }
//       }

//       // 데이터 흐름 파악용
//       for (let k = 1; k <= n; k++) {
//          console.log(...memo[k].map((e) => ("" + e).padStart(3)));
//       }
//       console.log(" ");
//    }

//    // console.log(memo);
// }


solution(40, 50, [[1, 2],[5, 3]]);
