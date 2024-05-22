const filePath = process.platform == "linux" ? "/dev/stdin" : "./example.txt";
let [n, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [N, M] = n.split(" ").map(Number);
const J = Number(input.shift());
input = input.map(Number);

let left = 1; // 바구니 내부의 왼쪽 좌표 초기값
let right = M; // 바구니 내부의 오른쪽 좌표 초기값
let answer = 0; // 움직임 수 저장할 변수

for (const pos of input) {
  if (right < pos) {
    answer += pos - right;
    right = pos;
    left = pos - (M - 1);
  } else if (left > pos) {
    // 사과의 위치가 바구니보다 왼쪽에 떨어짐
    answer += left - pos;
    left = pos;
    right = pos + (M - 1);
  }
}
console.log(answer);
