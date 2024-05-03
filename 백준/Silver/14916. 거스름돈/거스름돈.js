  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const n = Number(input[0]);
  function solution(n) {
    let cnt = 0;
    if (n === 1 || n === 3) return -1;

    while (n > 0) {
      if (n % 2 === 1 || n % 5 === 0) {
        cnt++;
        n -= 5;
      } else {
        cnt++;
        n -= 2;
      }
    }
    return cnt;
  }

  console.log(solution(n));


