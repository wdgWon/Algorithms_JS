// function solution(triangle) {
//     for(let i = 1; i < triangle.length; i++) {
//         triangle[i] = triangle[i].map((value, j) => {
//             const [left, right] = [triangle[i-1][j-1], triangle[i-1][j]];
//             const max = Math.max(~~left, ~~right);
//             return value + max;
//         });
//     }
//     console.log(Math.max(...triangle.at(-1)));
// }

function solution(triangle) {
   for (let l = 0; l < triangle.length; l++) {
      console.log(" ".padStart(triangle.length - l), triangle[l]);
   }

   for (let i = 1; i < triangle.length; i++) {
      console.log(" ");

      triangle[i] = triangle[i].map((value, j) => {
         const [left, right] = [triangle[i - 1][j - 1], triangle[i - 1][j]];
         const max = Math.max(~~left, ~~right);
         return value + max;
      });

      for (let l = 0; l < triangle.length; l++) {
         console.log(" ".padStart(triangle.length - l), triangle[l]);
      }

      console.log(" ");
   }
   console.log(Math.max(...triangle.at(-1)));
}

solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]);
