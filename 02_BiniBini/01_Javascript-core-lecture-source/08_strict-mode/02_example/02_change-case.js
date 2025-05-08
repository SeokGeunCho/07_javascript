// [JavaScript - Strict Mode에서 변화되는 상황 정리]

// ✅ 1. 일반 함수에서의 this 바인딩

(function () {
    "use strict"; // 엄격 모드 적용

    function test() {
        console.log("this =", this);
    }

    test();       // 일반 함수 호출 → this는 undefined (엄격 모드에서만)
    new test();   // 생성자 함수 호출 → this는 새로 생성된 인스턴스 객체
})();

/*
📌 설명:

- non-strict mode:
    test() → this는 전역 객체 (window 또는 globalThis)

- strict mode:
    test() → this는 undefined (암묵적 전역 방지 목적)

- new test():
    무조건 this는 생성된 인스턴스를 가리킴 (strict 모드와 무관)
*/


// ✅ 2. arguments 객체와 매개변수의 연결 해제

(function (x) {
    'use strict'; // 엄격 모드 적용

    x = 2; // 매개변수 x 값을 변경
    console.log("x =", x);              // 2
    console.log("arguments[0] =", arguments[0]); // 1 → 바뀌지 않음
})(1);

/*
📌 설명:

- non-strict mode:
    매개변수 x를 변경하면 arguments[0]도 함께 변경됨 (같은 참조)

- strict mode:
    매개변수와 arguments는 완전히 분리됨 → 하나를 바꿔도 다른 쪽은 영향 없음
*/

