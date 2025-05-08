// 표준 내장 객체 
// (Standartd Built-in Objects or Global Objects)
const str = new String('자바스크립트');
const num = new Number(200);
const bool = new Boolean(true);
const date = new Date();
const map = new Map();
const set = new Set();
// 어떤 객체는 선언없이 객체의 메소드와 속성을 바로 가져다 사용할 수 있습니다.

console.log(Math.PI);
console.log(Date.parse('2019-01-01'));
console.log(JSON.parse('{}'));

// String, Number, Boolean 자료형은 표준 내장 객체로 자동으로 래핑됨
// 즉, 문자열로 작성된 값이 String 객체로 래핑된다는 의미
const str1 = '자바스크립트 200제';
const str2 = new String('자바스크립트 200제');

console.log(typeof str1);
console.log(typeof str2);

console.log(str1 === '자바스크립트 200제');
console.log(str2 === new String('자바스크립트 200제'));

console.log(str1.valueOf());
console.log(str2.valueOf());







