// [JavaScript - Symbol 타입 & 객체 타입]

// 1. Symbol
// ES6(ECMAScript 2015)에서 새롭게 추가된 '7번째 데이터 타입'이다.
// 특징: '절대 중복되지 않는' 유일한 값을 만든다.
// 주로 객체의 '고유한 property 키'를 만들 때 사용한다.

var key = Symbol('key'); 
// Symbol 함수를 사용해 'key'라는 설명이 붙은 심볼 값을 생성

console.log(`key`, typeof key);
// 출력: key symbol
// → Symbol 타입은 typeof로 검사하면 'symbol'이 나온다.

// 2. 객체(Object) 타입
// JavaScript의 데이터 타입은 크게
// 원시 타입(Primitive Type)과 객체 타입(Object Type)으로 나뉜다.
// (※ 객체에는 함수(Function), 배열(Array) 등도 포함된다 → 추후에 학습 예정)

// 객체(Object) 만들기
var obj = {};  // 빈 객체 생성

// 객체에 프로퍼티 추가 (키-값 구조)
// 여기서는 위에서 만든 Symbol 'key'를 프로퍼티 키로 사용
obj[key] = 'value';  

console.log(`obj : `, obj);
// 출력: obj : { [Symbol(key)]: 'value' }
// → 키가 Symbol 타입이기 때문에 [Symbol(key)] 형태로 출력된다.

console.log(`obj[key]: `, obj[key]);
// 출력: value
// → obj에서 Symbol 키를 사용해서 값을 꺼낼 수 있다.
