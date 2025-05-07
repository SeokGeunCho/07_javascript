// 01_variable 문제
// 사용자로부터 이름과 나이를 입력받아 출력하는 문제입니다.
let name = "홍길동"
let age = 30

console.log(`${name}의 나이는 ${age}세 입니다..j`)


// 02_operator 문제
// 두 숫자를 입력받아 사칙연산 결과를 출력하는 문제입니다.
var num1 = 10
var num2 = 5

console.log(`첫 번째 숫자: ${num1}`)
console.log(`첫 번째 숫자: ${num2}`)

console.log(`결과:`)
console.log(`덧셈: ${num1+num2}`);
console.log(`뺄셈: ${num1-num2}`);
console.log(`곱셈: ${num1*num2}`);
console.log(`나눗셈: ${num1/num2}`);


// 03_object-literal 문제
// book 객체를 생성하고 속성을 출력하는 문제입니다.
var book = {
    title : "자바스크립트 입문",
    writter : "김지환",
    page : 350
};

console.log(`${title} (${witter}) - 총 ${page}페이지`);

// 04_function 문제
// 숫자를 전달받아 짝수/홀수를 판별하는 함수를 작성하는 문제입니다.
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(`${num}는 짝수입니다.`);
    } else {
        console.log(`${num}는 홀수입니다.`);
    }
}

// 05_scope 문제
// var, let, const의 스코프 차이를 확인하는 문제입니다.

// 06_object-constructor-function 문제
// Person 생성자 함수를 작성하고 introduce 메서드를 포함하는 문제입니다.

// 07_prototype 문제
// Person 생성자에 대해 프로토타입으로 introduce 메서드를 추가하는 문제입니다.

// 08_strict-mode 문제
// 'use strict'로 변수 선언 없이 대입할 때 에러가 발생하는지 확인하는 문제입니다.

// 09_array 문제
// 문제 1: 배열을 선언하고 숫자 1, 2, 3을 담으세요.
// 문제 2: 배열에 4를 추가하고 전체 배열을 출력하세요.
// 문제 3: 배열의 첫 번째 요소를 출력하세요.
