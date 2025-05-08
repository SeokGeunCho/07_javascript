// [JavaScript - 프로토타입 상속과 __proto__]

// ✅ 상위 객체 정의
const user = {
    activate: true,
    login: function () {
        console.log("✅ 로그인 성공!");
    }
};

// ✅ 하위 객체 정의
const student = {
    passion: true
};

// ✅ student는 user를 상속한다
student.__proto__ = user; // student → user

console.log("student.passion:", student.passion);   // true (자기 자신)
console.log("student.activate:", student.activate); // true (user에서 상속)
student.login();                                     // user에서 상속받은 메서드 호출

// ✅ 프로토타입 체인 확장
const ohgiraffersStudent = {
    class: 2
};
ohgiraffersStudent.__proto__ = student; // ohgiraffersStudent → student → user

console.log("ohgiraffersStudent.class:", ohgiraffersStudent.class);       // 2 (자기 자신)
console.log("ohgiraffersStudent.passion:", ohgiraffersStudent.passion);   // true (student에서 상속)
console.log("ohgiraffersStudent.activate:", ohgiraffersStudent.activate); // true (user에서 상속)
ohgiraffersStudent.login();                                               // user에서 상속받은 메서드 실행

// ✅ 존재하지 않는 프로퍼티 접근 → 프로토타입 체인 끝까지 올라가도 없으면 undefined
console.log("ohgiraffersStudent.email:", ohgiraffersStudent.email); // undefined

/*
📌 프로토타입 체인 구조:

ohgiraffersStudent
   ↓
student
   ↓
user
   ↓
Object.prototype
   ↓
null

➡ 객체에서 속성을 찾을 때 이 순서로 위로 올라가며 찾는다.
➡ 없으면 undefined가 반환됨 (에러 아님)

💡 정리:
- `__proto__`는 객체 간 상속 관계를 만든다.
- 상속된 객체의 프로퍼티나 메서드도 마치 자기 것처럼 쓸 수 있다.
- 객체는 `__proto__`로 다른 객체를 참조하며 연결된 "체인"을 형성한다.
- 이 체인을 "프로토타입 체인(prototype chain)"이라고 한다.

⚠ 실무에서는 __proto__ 대신 다음을 권장:
- `Object.create(proto)`     // 새 객체 생성 시 프로토타입 설정
- `Object.setPrototypeOf(obj, proto)` // 기존 객체에 설정
*/
