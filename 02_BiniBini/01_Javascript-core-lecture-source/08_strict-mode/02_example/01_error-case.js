// [JavaScript - Strict Mode(엄격 모드)에서 에러가 나는 대표적인 예제 모음]

// ✅ 1. 암묵적 전역 변수 생성 금지

(function () {
    // 'use strict'; // ← 이 줄을 주석 해제하면 ReferenceError 발생!

    x = 1; // ❗ 선언 없이 변수 할당 → strict mode에서는 에러
    console.log("x =", x); // non-strict에서는 암묵적 전역 변수로 처리됨
})();

// console.log(x); // non-strict일 경우 접근 가능 (암묵적 전역이므로)

// ✅ 2. 변수, 함수, 매개변수에 delete 사용 금지

(function () {
    // 'use strict'; // ← 이 줄을 활성화하면 SyntaxError 발생

    var y = 1;
    delete y; // ❗ delete는 객체의 프로퍼티에만 사용 가능함
    console.log("삭제 시도 후 y =", y); // 정상 출력 (삭제 안 됨)
})();

/*
📌 delete 사용 제한 이유:
- 엄격 모드에서는 변수, 함수, 매개변수를 delete로 제거하는 것은 문법 오류
- delete는 오직 객체의 프로퍼티를 제거하는 데만 사용해야 함
*/

// ✅ 3. 함수 매개변수 이름 중복 금지

(function () {
    // 'use strict'; // ← 이 줄을 활성화하면 SyntaxError 발생 (매개변수 이름 중복)

    function test(x, x) {
        // ❗ 중복된 파라미터 → 엄격 모드에서는 금지됨
        return x + x;
    }

    console.log("test:", test(1, 2)); // 출력: 4 (non-strict인 경우)
})();

/*
📌 중복된 파라미터는 가독성을 해치고, 스코프 혼란을 유발할 수 있어 금지됨
*/


// ✅ 4. with 문 사용 금지

(function () {
    // 'use strict'; // ← 이 줄을 활성화하면 SyntaxError 발생

    const test = { x: 1, y: 2, z: 3 };

    // with 문은 객체 이름 없이 해당 객체의 속성에 직접 접근할 수 있게 해줌
    // 하지만 가독성과 성능에 문제가 있고 스코프 판단이 어려워져 strict mode에서는 금지됨

    with (test) {
        console.log(x); // 1
        console.log(y); // 2
        console.log(z); // 3
    }
})();

/*
📌 with 문은 다음 이유로 엄격 모드에서 금지됨:
- 실행 시점까지 어떤 식별자가 참조되는지 결정하기 어려움 (동적 스코프 생성)
- 성능 저하 및 유지보수 어려움
*/
