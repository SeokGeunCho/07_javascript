function test() {
  x = 10;
}

test();
console.log(` x > `, x);

// 엄격모드 적용
// 1. 전역의 선두에 추가 : 스크립트 전체에 strict mode 적용
// "use strict";

function test2() {
  // 2.함수 몸체의 선두에 추가 : 해당 함수와 중첩 함수에 strict mode 적용
  // "use strict";
  x = 10;
  // 코드의 선두가 아니라면 strict mode적용되지 않는다.
  ("use strict");
}

test2();
console.log(` x > `, x);

/**
 * CSS -> <style> </style>
 * JS-> <script> </script>
 *
 * 전역에 엄격모드를 적용하면 스크립트 태그 단위로 적용되어 strict mode와 non strict mode의 혼용으로 인한
 * 오류가 발생할 수 있음에 유의한다.
 * <script>
 * 'use stcict';
 * </script>
 * .....
 * <script>
 *  x = 10;   // 엄격모드 적용 X, 에러 발생 X
 * </script>
 */
