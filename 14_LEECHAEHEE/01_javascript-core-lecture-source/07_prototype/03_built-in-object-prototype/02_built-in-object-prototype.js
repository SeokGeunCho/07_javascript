// Function, String, Number 를 비롯한 내장 객체들 역시 프로토타입 메서드를 저장한다.
// 모든 내장 프로토타입 상속 트리 꼭대기에는 Object.prototype이 있어야한다고 규정한다.
const num = new Number(100);
console.log(num);
// num은 Number.prototype을 상속받았는가?
console.log(num.__proto__ === Number.prototype);
// num은 object.prototype을 상속 받았는가?
console.log(num.__proto__.__proto__ === Object.prototype);
// Object.prototype의 [[prototype]]은 null
console.log(num.__proto__.__proto__.__proto__);

// Object.prototype과 Number.prototype에 모두 toString 메소드가 있으며
// 프로토타입 체인에서 가까운 메소드가 사용된다.
console.log(num.toString());

// "javascript".hello(); // 오류
String.prototype.hello = function () {
  console.log(`hello, ${this}`);
};
"JavaScript".hello();