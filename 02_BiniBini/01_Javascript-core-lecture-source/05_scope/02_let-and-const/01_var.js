// Var의 문제점 확인

//  1. 동일 스코프 내 중복 선언이 가능한 문제점
var msg = 'Hello!';
console.log(msg);

var msg = 'Bye';
console.log(msg);


// 2. 함수 레벨 스코프를 가짐

// 3. 변수 호이스팅
console.log(test);
var test = 'Nice to meet you!'
console.log(test);
var test;


