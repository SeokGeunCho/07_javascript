var test;
console.log(typeof test);

test = 1;
console.log(typeof test);

test = null;
console.log(typeof test); // object
// 자바스크립트 첫 번째 버전의 버그이지만 기존 코드에
// 영향을 줄 수 있어서 아직까지 수정되지 못하고 있음

test = Symbol(); // symbol타입
console.log(typeof test);

test = {} // 객체
console.log(typeof test);

test = []; // 배열
console.log(typeof test);

test = function(){};;  // 함수
console.log(typeof test); // function(object의 한 종류)