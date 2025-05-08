// [JavaScript - 매개변수(Parameter)와 인수(Argument)]

// ✅ 함수 정의
function hello(name) {
    console.log("▶ arguments 객체 :", arguments);
    console.log("▶ arguments[0] >>", arguments[0]);
    return `${name}님 안녕하세요?`;
}

// ❌ 매개변수(name)는 함수 외부에서 사용할 수 없다
// console.log(name); // ReferenceError: name is not defined

// ✅ 함수 호출 (인수 없이 호출)
var result = hello();
// 출력:
// arguments 객체: [Arguments] {}
// arguments[0] >> undefined
console.log(result); // undefined님 안녕하세요?

// ✅ 함수 호출 (인수를 3개 전달)
result = hello("유관순", "홍길동", "김유신");
// 출력:
// arguments 객체: [Arguments] { '0': '유관순', '1': '홍길동', '2': '김유신' }
// arguments[0] >> 유관순
console.log(result); // 유관순님 안녕하세요?

/*
💡 중요 개념 1: arguments 객체
- 함수 내부에서 자동으로 생성되는 "유사 배열 객체"
- 전달된 인수들을 저장하고 있음
- 실제 매개변수 개수와 상관없이 호출 시 전달된 모든 인수를 확인 가능

💡 중요 개념 2: 인수 < 매개변수
- 전달되지 않은 매개변수는 자동으로 undefined

💡 중요 개념 3: 인수 > 매개변수
- 초과된 인수는 무시되지만, arguments 객체에는 남아 있음
*/


// ✅ 기본값을 가지는 매개변수 (ES6부터 지원)
function hi(name = "아무개") {
    return `${name}, 안녕?`;
}

console.log(hi("강감찬")); // 강감찬, 안녕?
console.log(hi());         // 아무개, 안녕?

/*
💡 중요 개념 4: 기본값 매개변수
- 인수를 전달하지 않거나, undefined를 전달하면 기본값 사용
- null을 전달하면 기본값 적용 ❌ (null은 값이 존재함)
*/

