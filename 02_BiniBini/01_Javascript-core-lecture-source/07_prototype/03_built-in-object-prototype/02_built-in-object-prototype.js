// [JavaScript - 내장 객체의 프로토타입 상속 구조]

// ✅ Number 객체 생성
const num = new Number(100); // 래퍼 객체 (object 형태의 숫자)

console.log(num); 
// Number {100} → 내부적으로 객체 형태로 감싸진 숫자

// ✅ num은 Number.prototype을 상속받는가?
console.log(num.__proto__ === Number.prototype); // true

// ✅ num은 Object.prototype을 상속받는가?
console.log(num.__proto__.__proto__ === Object.prototype); // true
// Number.prototype → Object.prototype → null

// ✅ Object.prototype의 [[Prototype]]은 null
console.log(num.__proto__.__proto__.__proto__); // null
// 프로토타입 체인의 끝 (null이 반환됨)

// ✅ toString은 어디에서 호출되나?
console.log(num.toString()); 
// Number.prototype.toString이 호출됨 (Object.prototype에도 있지만, 더 가까운 곳 우선)

/*
💡 핵심 개념:

- 자바스크립트의 내장 객체(Number, String, Function 등)는
  모두 자신만의 prototype 객체를 갖는다.
  ex) Number.prototype, String.prototype, Function.prototype

- 이 prototype 객체들도 결국 Object.prototype을 상속받는다.

- 즉, 모든 내장 객체의 프로토타입 체인 최종 끝에는 항상 Object.prototype이 있어야 한다.
  이건 자바스크립트 명세(스펙)에서도 규정된 내용이다.
*/


// ✅ String.prototype에 사용자 정의 메서드 추가
String.prototype.hello = function() {
    console.log(`hello, ${this}`);
};

// ✅ 문자열 리터럴도 내부적으로 new String("...")으로 감싸지기 때문에 사용 가능
"JavaScript".hello(); 
// 출력: hello, JavaScript

/*
📌 이게 가능한 이유:

"JavaScript"는 문자열 리터럴이지만,
메서드 호출 순간 내부적으로 new String("JavaScript")로 래핑됨.
그 객체는 String.prototype을 상속받기 때문에
우리가 추가한 hello() 메서드를 사용할 수 있게 됨.
*/


/*
📌 프로토타입 체인 구조 요약:

num (new Number(100))
  ↓
Number.prototype
  ↓
Object.prototype
  ↓
null (끝)

"문자열".hello()
  ↓
String.prototype
  ↓
Object.prototype
  ↓
null (끝)
*/

