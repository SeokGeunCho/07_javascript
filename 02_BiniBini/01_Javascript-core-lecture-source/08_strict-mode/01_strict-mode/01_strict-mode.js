// [JavaScript - Strict Mode (엄격 모드)]

// ✅ 1. 전역에서 strict 모드 적용하려면 파일 또는 <script> 태그 맨 앞에 선언해야 함
// "use strict"; ← 문자열 위치 중요 (실수: "User strict" ❌)

function test() {
    // ✅ 2. 함수 내에서 엄격 모드 적용
    'use strict'; // 함수 블록 내 가장 앞에 선언해야 동작

    // ❌ 아래 코드는 에러 발생 (변수 선언 없이 사용 금지)
    x = 10; // ReferenceError: x is not defined
}

test();

console.log(`x =`, x); 
// 이 줄은 실행되지 않음 (앞에서 ReferenceError가 발생했기 때문)


/*
📌 엄격 모드가 없다면?

function test() {
    // 'use strict'; 가 없을 경우 아래 코드도 정상 실행됨 (암묵적 전역 변수 선언)
    x = 10;
}

test();
console.log(`x =`, x); // 출력: x = 10
*/


/*
📌 HTML 환경에서 주의사항:

<script>
  'use strict'; // 여기에 엄격 모드를 선언하면, 이 스크립트 태그 안에만 적용됨
</script>

<script>
  x = 10; // 이 스크립트 태그 안에서는 엄격 모드 적용되지 않음 → 오류 발생 X
</script>

➡ 전역에 엄격 모드를 적용하더라도, <script> 태그 단위로 구분되므로
   하나의 파일에 strict와 non-strict가 혼용되면 디버깅이 어려워질 수 있음
*/

