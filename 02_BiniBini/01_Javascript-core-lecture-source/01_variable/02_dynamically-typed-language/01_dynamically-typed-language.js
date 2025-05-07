// [JavaScript - 동적 타입(dynamic typing) 언어]

// JavaScript는 "동적 타입 언어"다.
// → 변수 선언할 때 타입을 미리 정하지 않는다.
// → 변수를 선언하고 값을 할당할 때 타입이 결정된다.
// → 값이 바뀌면 타입도 바뀔 수 있다.

var test; // 변수 선언 (값 없음)

console.log(typeof test); 
// 출력: undefined
// → 값이 없기 때문에 타입은 'undefined'

// 숫자 할당
test = 1;
console.log(typeof test); 
// 출력: number

// 문자열 할당
test = 'JS';
console.log(typeof test); 
// 출력: string

// 불린값 할당
test = true;
console.log(typeof test); 
// 출력: boolean

// null 할당
test = null;
console.log(typeof test); 
// 출력: object
// → ⚠️ 버그! (초창기 JS 엔진 설계 실수로 'object'가 출력됨)
// → 하지만 너무 많은 기존 코드에 영향이 있어서 고치지 못하고 그냥 두고 있음.

// 심볼(Symbol) 할당
test = Symbol();
console.log(typeof test); 
// 출력: symbol

// 객체(Object) 할당
test = {}; 
console.log(typeof test); 
// 출력: object

// 배열(Array) 할당
test = []; 
console.log(typeof test); 
// 출력: object
// → 주의! 배열도 object 타입이다.
// → 배열인지 구분하려면 Array.isArray() 함수를 사용한다.

// 함수(Function) 할당
test = function(){}; 
console.log(typeof test); 
// 출력: function
// → ⚡ 주의: typeof 결과로 'function'이 나오지만
// → 사실 함수도 'object'의 특별한 형태(Callable Object)다!
