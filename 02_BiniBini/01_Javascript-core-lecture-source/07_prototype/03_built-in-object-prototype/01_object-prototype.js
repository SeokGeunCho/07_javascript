// [JavaScript - Object.prototype과 기본 객체 구조]

// ✅ 빈 객체 생성
const obj = {};

// ✅ obj는 어떤 프로토타입을 참조하고 있을까?
console.log(obj.__proto__ === Object.prototype); 
// true → obj는 Object.prototype을 자신의 [[Prototype]]으로 가진다

// ✅ obj는 toString 메서드를 가지고 있을까?
console.log(obj.toString === obj.__proto__.toString); 
// true → obj는 toString을 직접 갖고 있지 않고, 프로토타입에서 상속받음

console.log(obj.toString === Object.prototype.toString); 
// true → 결국 obj.toString은 Object.prototype의 메서드임

/*
💡 개념 설명:

- `Object`는 자바스크립트의 내장 생성자 함수
- `Object.prototype`은 모든 "순수 객체"가 상속하는 최상위 프로토타입 객체
- 이 안에는 toString, hasOwnProperty, valueOf 등 다양한 공통 메서드가 정의되어 있음

📌 객체 생성 시 구조

- const obj = {}; 또는 new Object(); 를 실행하면 내부적으로 다음 구조 생성:

    obj → Object.prototype → null

    즉, obj.__proto__ === Object.prototype

    그리고 Object.prototype.__proto__ === null (체인의 끝)

💡 toString은 어디 있나?

- obj 자체에는 toString 없음
- obj.toString → obj.__proto__.toString → Object.prototype.toString

📌 toString은 모든 객체가 공통적으로 사용할 수 있도록
   Object.prototype에 정의되어 있음
*/

