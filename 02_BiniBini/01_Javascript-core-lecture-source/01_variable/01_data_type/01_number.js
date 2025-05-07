// [JavaScript 기본 문법]

// 1. 주석
// 한 줄 주석은 // 두 슬래시를 사용해서 작성한다.

/*
여러 줄 주석은
이렇게 슬래시 + 별표로 시작해서
별표 + 슬래시로 끝낸다.
*/

// 2. 숫자 타입 (Number Type)
// JavaScript는 정수, 실수, 음수 모두 같은 'Number' 타입이다.

// 정수 (Integer)
var integer = 10;

// 실수 (Double or Float)
var double = 5.5;

// 음수 (Negative Number)
var negative = -10;

// 3. 출력하기 (Console Output)
// console.log()를 사용하면 콘솔 창에 값을 출력할 수 있다.
console.log(integer);    // 출력: 10
console.log(double);     // 출력: 5.5
console.log(negative);   // 출력: -10

// 4. 숫자 비교 (Comparison)
// == 연산자를 사용해서 두 값을 비교할 수 있다.
// 결과는 true(참) 또는 false(거짓)로 나온다.
console.log(integer == 10.0);  
// 출력: true
// 이유: 10과 10.0은 둘 다 JavaScript에서는 같은 Number 타입이기 때문에 true가 된다.
