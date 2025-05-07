// JavaScript는 동적 타입 언어이다.
// => 데이터 타입을 사전에 선언하지 않는다.
// => 변수 선언이 아니라 할당에 의해 타입이 결정되며
// 재할당에 의해 동적으로 변수의 타입이 변화할 수 있다.

var test;
console.log(typeof test); // undefined

test = 1;
console.log(typeof test); // number

test = "JAVASCRIPT";
console.log(typeof test); // string

test = true;
console.log(typeof test); // boolean

// 자바스크립트 첫 번재 버전의 버그이지만, 기존 코드에 영향을 줄 수 있어서
// 아직까지 수정되지 못하고 있음
test = null;
console.log(typeof test); // object (에러)

test = Symbol();
console.log(typeof test); // symbol

test = {}; // 객체생성
console.log(typeof test); // object

test = []; // 배열
console.log(typeof test); // object

test = function () {}; // 함수
console.log(typeof test); // function (object의 한 종류)
