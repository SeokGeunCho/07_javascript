// 반환문
function hello(name) {
  return `${name}님 안녕하세요`;
}

console.log(hello("유관순"));

// 반환 값이 없는 함수
function func() {
  console.log("함수가 호출 됨");
  // 반환 값이 없는 경우 return 구문 생략 가능하며 암묵적으로 undefined를 반환
  return;
}

console.log(func());
