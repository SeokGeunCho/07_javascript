// [JavaScript - 중첩 함수(Nested Function)]

// ✅ 중첩 함수란?
// - 함수 안에서 또 다른 함수를 정의하는 것
// - 내부 함수(inner function), 중첩 함수(nested function)라고 부름
// - 이 중첩 함수를 감싸는 함수는 외부 함수(outer function)라고 한다
// - 내부 함수는 주로 외부 함수를 "도와주는 역할(헬퍼 함수)"로 사용됨

function outer() {
    var outerVal = "외부 함수 변수"; // 외부 함수의 지역 변수

    // 중첩된 내부 함수 정의
    function inner() {
        var innerVal = "내부 함수 변수"; // 내부 함수의 지역 변수

        // 내부 함수에서는 외부 함수의 변수를 자유롭게 참조할 수 있음
        console.log(`✅ inner에서 접근 가능 -> outerVal: ${outerVal}, innerVal: ${innerVal}`);
    }

    // 내부 함수 실행
    inner();

    // 외부 함수에서는 내부 함수의 변수에 접근할 수 없음
    // console.log(innerVal); // ❌ ReferenceError: innerVal is not defined
}

outer(); // 외부 함수 실행

// 외부에서 내부 함수 자체도 호출할 수 없음 (inner는 outer 함수의 지역이기 때문)
// inner(); // ❌ ReferenceError: inner is not defined

/*
💡 핵심 개념: 스코프(Scope)
- 내부 함수는 자신을 포함하는 외부 함수의 변수에 접근할 수 있다 (렉시컬 스코프)
- 반대로 외부 함수는 내부 함수의 지역 변수에 접근할 수 없다
- 내부 함수는 외부 함수의 실행이 끝나면 일반적으로 함께 사라짐
*/

