// 나머지 매개변수(...)
function merge(msg1, mgs2) {
  console.log(arguments);
  return msg1 + mgs2;
}

console.log(merge("안녕하세요."));
console.log(merge("안녕하세요", "반갑습니다."));
console.log(merge("안녕하세요", "반갑습니다", "제 이름은 홍길동입니다."));

// 나머지 매개변수(...)를 활용해서 변경
function mergeAll(...args) {
  let msg = "";
  for (let arg of args) msg += arg;
  return msg;
}

console.log(mergeAll("안녕하세요."));
console.log(mergeAll("안녕하세요", "반갑습니다."));
console.log(mergeAll("안녕하세요", "반갑습니다", "제 이름은 홍길동입니다."));
