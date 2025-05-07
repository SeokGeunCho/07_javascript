// Var의 문제점 확인
// 1. 동일 스코프 내 중복 선언 가능
var msg = "안녕하세요";
console.log(msg);

var msg = "안녕히가세요"
console.log(msg);

// 2. 함수 레벨 스코프를 가짐

// 3. 변수 호이스팅
//선언(var test)은 위로 끌어올려짐, 하지만 초기화("반갑습니다.")는 아래에 있음
// 문제: 선언은 되었다고 인식하지만 값은 undefined, 버그 유발 가능
console.log(test);
test = "반갑습니다.";
console.log(test);
var test;


