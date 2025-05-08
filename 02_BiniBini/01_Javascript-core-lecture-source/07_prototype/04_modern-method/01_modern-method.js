// [JavaScript - 프로토타입 접근 및 설정을 위한 모던 메서드]

// ✅ 상위 객체 (프로토타입 역할)
const user = {
    activate: true,
};

// ✅ Object.create(proto)
// proto를 [[Prototype]]으로 갖는 새 객체를 생성함
const student = Object.create(user);

console.log(student.activate); // true → student에는 없지만 user에서 상속됨
console.log(student);          // {} → student 자체에는 아무 속성도 없음 (상속만 받음)

// ✅ Object.getPrototypeOf(obj)
// obj의 [[Prototype]]을 반환함 (student → user)
console.log(Object.getPrototypeOf(student));         // user 객체 출력
console.log(Object.getPrototypeOf(student) === user); // true

// ✅ Object.setPrototypeOf(obj, newProto)
// student의 프로토타입을 빈 객체로 교체
Object.setPrototypeOf(student, {}); 

console.log(Object.getPrototypeOf(student));         // {} 출력
console.log(Object.getPrototypeOf(student) === user); // false → 이제 더 이상 user를 상속하지 않음

/*
⚠️ 왜 Object.setPrototypeOf를 쓸까?
→ __proto__는 오래된 방식이며, 직접 접근하면 예상치 못한 오류가 발생할 수 있기 때문!
   특히, '__proto__'라는 키 이름을 직접 다룰 때 버그 발생 가능성 있음
*/

// ✅ 직접 __proto__를 다루는 위험한 예
const obj = Object.create(user); // obj.__proto__ === user

let key = "__proto__";           // 키 이름이 __proto__ 문자열임
console.log("------>", obj[key]); // user 출력됨

// __proto__에 새 객체를 강제로 할당
obj[key] = { test: "새로운 객체 덮어쓰기!!" }; 
console.log(obj[key]);           // { test: "..." } 출력됨 (문자열 키로서 작동)
console.log(obj.__proto__);      // 여전히 user → 실제 프로토타입은 안 바뀜!

/*
📌 요점 정리:
- obj["__proto__"]는 문자열 키 접근이므로 실제 [[Prototype]] 변경이 아님
- 이런 혼동을 방지하려면 __proto__ 대신 항상 Object.get/setPrototypeOf 사용이 권장됨
*/

