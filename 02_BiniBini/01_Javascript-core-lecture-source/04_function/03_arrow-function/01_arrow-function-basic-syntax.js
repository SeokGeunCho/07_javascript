// [JavaScript - 화살표 함수 기본 문법 쉽게 정리]

// ✅ 화살표 함수란?
// - function 키워드 없이, 화살표(=>)로 함수를 만드는 방법
// - ES6(2015)부터 등장
// - 항상 익명 함수이며, 간결하게 함수 정의 가능
// - 특히 "짧은 함수" 작성에 매우 유용!

// 1. 기본 function 표현식
var message = function() {
    return `hello world`;
};
console.log(message()); // hello world

// 2. 화살표 함수로 변경
message = () => {
    return `Arrow Function`;
};
console.log(message()); // Arrow Function

// 3. 명령문이 한 줄이면 중괄호와 return 생략 가능
// - 표현식의 결과가 자동으로 반환됨 (암묵적 반환)
message = () => `Arrow Function2`;
console.log(message()); // Arrow Function2

// 4. 매개변수가 있는 경우
message = (val1, val2) => "Arrow " + val1 + val2;
console.log(message("Function", "!!!")); // Arrow Function!!!

// 5. 일반 함수 vs 화살표 함수 비교

// (1) 일반 함수
function hello(name) {
    return `${name}님 안녕하세요!`;
}

// (2) 화살표 함수 - 기본형
const helloArrow = (name) => {
    return `${name}님 안녕하세요!`;
};

// (3) 화살표 함수 - 한 줄 축약형
const helloShort = name => `${name}님 안녕하세요!`;

// 실행 결과
console.log(hello("홍길동"));       // 홍길동님 안녕하세요!
console.log(helloArrow("이순신")); // 이순신님 안녕하세요!
console.log(helloShort("강감찬")); // 강감찬님 안녕하세요!

// 6. 매개변수 개수에 따른 괄호 생략

// (1) 매개변수 2개 이상 ➜ 괄호 생략 불가
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// (2) 매개변수 1개 ➜ 괄호 생략 가능
const greet = name => `안녕, ${name}!`;
console.log(greet("유관순")); // 안녕, 유관순!

// (3) 매개변수 0개 ➜ 괄호 필수
const sayHi = () => `Hi~ 👋`;
console.log(sayHi()); // Hi~ 👋


// ⚠️ 실수 주의 예제

// 아래 코드는 오류!
// message = function(cal1, cal2) {
//     return "Arrow " + val1 + val2; 
// };
// ➜ 여기서 val1, val2는 정의되지 않은 변수이므로 ReferenceError 발생함!
// ➜ cal1, cal2로 써야 함!

// 수정된 버전
message = function(cal1, cal2) {
    return "Arrow " + cal1 + cal2;
};
console.log(message("함수", "표현식")); // Arrow 함수표현식

// 매개변수 하나면 괄호 생략 가능
message = val => 'Arrow ' + val;
console.log(message('Function~')); // Arrow Function~
