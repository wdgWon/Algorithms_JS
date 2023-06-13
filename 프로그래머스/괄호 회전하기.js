// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class Queue {
//     constructor() {
//         this.front = null;
//         this.rear = null;
//     }

//     isEmpty() {
//         return this.front == null && this.rear === null;
//     }

//     enqueue(data) {
//         const newNode = new Node(data);
//         if (this.isEmpty()) this.front = newNode;
//         else this.rear.next = newNode;
//         this.rear = newNode;
//     }

//     dequeue() {
//         if (this.isEmpty()) return;
//         const temp = this.front.data;
//         this.front = this.front.next;
//         if (!this.front) this.rear = null;
//         return temp || null;
//     }
// }

function printCon(str, count) {
   console.log("str: ", str, " count: ", count);
   console.log(" ------------------- ");
}

function solution(s) {
   const compareStr = s + s;
   let count = 0;

   braceCheck: for (let i = 0; i < s.length; i++) {
      const stack = [];
      let str = "";

      for (let j = i; j < s.length + i; j++) {
         const brace = compareStr[j];
         str += brace;
         console.log("stack: ", stack.join());
         console.log("brace: ", brace, "\n");
         if (brace === "{" || brace === "[" || brace === "(") {
            stack.push(brace);
         } else {
            const matchBrace = stack.pop();
            switch (brace) {
               case "}":
                  if (matchBrace !== "{") {
                     printCon(str, count);
                     continue braceCheck;
                  }
                  break;
               case "]":
                  if (matchBrace !== "[") {
                     printCon(str, count);
                     continue braceCheck;
                  }
                  break;
               case ")":
                  if (matchBrace !== "(") {
                     printCon(str, count);
                     continue braceCheck;
                  }
                  break;
            }
         }
      }
      if (stack.length === 0) count++;
      printCon(str, count);
   }
   return count;
}


solution("}]()[{")