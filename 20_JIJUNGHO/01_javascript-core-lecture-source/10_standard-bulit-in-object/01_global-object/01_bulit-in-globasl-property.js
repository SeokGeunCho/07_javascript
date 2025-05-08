// global object는 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 어떤 객체보다도 먼저 생성되는
// 특수한 객체 Node.js환경에서는 global이 전역 객체이고, 브라우저 환경에서는 window가 전역 객체이다.
// 전역 객체는 계층 구조 상 어떤 객체에도 속하지 않는 최상위 객체이다.
console.log(this); // {}

// 1. infinity : 무한대를 나타내는 숫자값
// 전역 프로퍼티는 global을 생략하고 참조 할 수 있다.
console.log(global.Infinity === Infinity); // true
// 양의 무한대
console.log(10 / 0); // Infinity
// 음의 무한대
console.log(-10 / 0); // Infinity
console.log(typeof Infinity); // number

console.log("=========================");

// 2. NaN : 숫자가 아님(Not a Number)을 나타내는 숫자 값
console.log(global.NaN); // NaN
console.log(Number("abc")); // NaN
console.log(10 * "abcf"); // NaN
console.log(typeof NaN); // number

// NaN의 값을 비교하려면 isNaN() 사용

// 3. undefined : 값이 할당되지 않은 변수의 초기 상태, 원시타입 undefined
console.log(global.undefined); // undefined
let nothing;
console.log(nothing); // undefined
console.log(typeof undefined); // undefined
