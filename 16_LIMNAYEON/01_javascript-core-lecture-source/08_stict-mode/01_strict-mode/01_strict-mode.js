// 엄격모드 적용
// 1. 전역의 선두에 추가 : 스크립트 전체에 strict mode 적용
// "use strict";


function test(){
  // 2. 함수 몸체의 선두에 추가 : 해당 함수와 중첩 함수에 strict mode 적용
  // "use strict";
  x = 10;
  // 코드의 선두가 아니라면 strict mode적용되지 않는다.
  ("use strict");
}

test();
console.log(`x > `, x);

function test2(){
  x = 10;
}

test2();
console.log(`x > `, x);

/* 
  
*/
