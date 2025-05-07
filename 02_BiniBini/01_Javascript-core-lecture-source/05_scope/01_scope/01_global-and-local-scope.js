// [JavaScript - 전역(Global) 스코프 vs 지역(Local) 스코프]

// ✅ 전역 스코프(Global Scope)
// - 코드의 가장 바깥 영역
// - 어디서든 접근 가능 (스크립트 전체에 영향을 줌)
var x = 'global x';
var y = 'global y';

// ✅ 함수 outer 정의
function outer () {

    // 지역 변수 z (outer 함수의 지역 스코프에 선언됨)
    var z = "outer's local z";

    // 내부에서 전역 변수에 접근 가능
    console.log("outer → x:", x); // global x
    console.log("outer → y:", y); // global y
    console.log("outer → z:", z); // outer's local z

    // ✅ 중첩 함수 inner 정의
    function inner () {
        // 지역 변수 x → 전역 x를 가린다 (shadowing)
        var x = "inner's local x";

        // inner → 자기 스코프 우선
        console.log("inner → x:", x); // inner's local x

        // inner → y는 전역에서 찾음 (자기 지역에 없으므로 상위로 올라감)
        console.log("inner → y:", y); // global y

        // inner → z는 outer 함수의 지역 변수 (상위 스코프에서 찾음)
        console.log("inner → z:", z); // outer's local z
    }

    inner(); // inner 함수 실행
}

outer(); // outer 함수 실행

// ✅ 전역 영역에서는 전역 변수만 접근 가능
console.log("global → x:", x); // global x
console.log("global → y:", y); // global y

// console.log("global → z:", z); 
// ❌ ReferenceError: z is not defined (z는 outer 함수 내부 지역 변수이므로 접근 불가)
