// Var의 문제점 확인

// 1. 동일 스코프 내 중복 선언 가능
var msg = "안녕하세요";
console.log(msg);
var msg = "안녕히가세요";
console.log(msg);

// 2. 함수 레벨 스코프를 가짐

// 3. 변수 호이스팅
console.log(test);
test = "반갑습니다.";
console.log(test);
var test;