// symbol : ES6에서 추가된 7번째 타입으로 다른값과 중복 되지 않는 유일무이 값
// 이름 충돌 위험이 없는 객체의 유일한 프로퍼티 키값을 만들기 위해 사용
var key = Symbol("key");
console.log(`key : `, typeof key);

// 객체타입
// 자바스크립트의 데이터 타입은 크게 원시타입, 객체 타입으로 분류
// 객체(함수, 배열, ...)에 대해서는 추후에 학습
var obj = {};
obj[key] = "value"; // <----- [key]는 위에있는 심볼객체
console.log(`obj : `, obj);
console.log(`obj[key] : `, obj[key]);
