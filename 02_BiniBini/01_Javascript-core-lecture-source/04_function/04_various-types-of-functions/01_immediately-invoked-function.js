// [JavaScript - 즉시 실행 함수(IIFE, Immediately Invoked Function Expression)]

// ✅ 정의:
// - 함수의 정의와 동시에 실행되는 함수
// - 단 한 번만 실행되며, 다시 호출할 수 없다
// - 주로 익명 함수(이름 없는 함수)를 사용
// - 함수 전체를 괄호로 감싸야 하며, 마지막에 ()를 붙여 바로 실행한다
// - 변수/함수 이름 충돌 방지 목적이나 초기화 코드 등에 자주 사용됨

// ✅ 기본 문법: (function() { ... })();

// 1. 익명 즉시 실행 함수
(function() {
    console.log('✅ 익명 즉시 실행 함수!');
    console.log('함수 정의와 동시에 호출됨!');
})();

// 비교: 일반 함수는 정의 후 따로 호출해야 함
var test = function() {
    console.log('일반 함수입니다.');
};
test(); // 호출 필요


// 2. 기명 즉시 실행 함수 (이름이 있는 함수)
// - 이름이 있어도 바깥에서 다시 호출은 불가능
(function hello(name) {
    console.log('✅ 기명 즉시 실행 함수!');
    console.log(`name: ${name}`);
})("홍길동");

// 재호출 시도 → 오류 발생 (정의된 범위 밖에서 hello는 없음)
// hello("유관순"); // ❌ ReferenceError: hello is not defined


// 3. 즉시 실행 함수의 실용 예시
// - 코드 블록을 지역 범위로 만들어 변수 충돌을 방지함
var message = "전역 메시지";

(function() {
    var message = "지역 메시지";
    console.log(`▶ 즉시 실행 함수 내부 message: ${message}`);
})();

console.log(`▶ 전역 message: ${message}`);

// 출력 결과:
// ✅ 익명 즉시 실행 함수!
// 함수 정의와 동시에 호출됨!
// ✅ 기명 즉시 실행 함수!
// name: 홍길동
// ▶ 즉시 실행 함수 내부 message: 지역 메시지
// ▶ 전역 message: 전역 메시지

/*
💡 즉시 실행 함수의 장점
- 전역 변수 오염 방지 (즉시 실행 함수 내부 변수는 외부와 격리됨)
- 한번만 실행되는 초기화 코드를 작성할 때 유용
- 라이브러리에서 외부 환경을 침범하지 않도록 설계할 때 사용
*/

