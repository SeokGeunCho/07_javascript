// Javascript는 동적 언어이다.


// 재활당에 의해 동적으로 변수의 타입이 변화할 수 있다.
var test;
console.log(typeof test);

test = 1;
console.log(typeof test);

test = `javascript`;
console.log(typeof test);

test = true;
console.log(typeof test);

test = null;
console.log(typeof test); //  null은 object로 타입이 출력되는 오류가 있다.

test = Symbol();
console.log(typeof test);

test = {};  // 객체
console.log(typeof test);

test = [];
console.log(typeof test);

test = function(){}; // 함수
console.log(typeof test);   //function은 object의 한 종류
