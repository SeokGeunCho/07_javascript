// 📘 클래스 선언 (ES6 이후 도입된 문법)
// 클래스를 사용하면 객체(인스턴스)를 만들고 구조화하기 쉬워짐
class Student {

    // 🔸 생성자 함수 → 인스턴스가 생성될 때 자동으로 실행됨
    constructor(name) {
        this.name = name;   // 전달받은 이름을 인스턴스 속성에 저장
        this.group = 1;     // 고정된 값으로 초기화 (모든 학생은 group 1)
    }

    // 🔸 클래스 내부에 선언된 메서드는 자동으로 프로토타입에 추가됨
    introduce() {
        return `Hi I'm ${this.name} from ${this.group}`;
        // return 생략해서 undefined만 나오는 문제가 있음
    }
}

// 🔹 Student 클래스의 인스턴스 생성
const student = new Student("홍길동");

// ❌ introduce 메서드가 값을 반환만 하고 출력하지 않아서 콘솔엔 안 나옴
console.log(student.introduce()); // "Hi I'm 홍길동 from 1"

// ───────────────────────────────
// 📌 클래스 자체는 함수다

console.log(typeof Student);  // function → 클래스도 내부적으로 함수임
console.log(Student === Student.prototype.constructor); // true → 클래스의 생성자는 프로토타입에 저장됨

// 클래스 내부에서 정의한 메서드는 프로토타입에 올라간다
console.log(Student.prototype.introduce); // [Function: introduce]

// 클래스의 프로토타입에 있는 속성 확인 (constructor, introduce 등)
console.log(Object.getOwnPropertyNames(Student.prototype));
// 출력: ['constructor', 'introduce']

// ───────────────────────────────
// 📘 클래스와 유사한 생성자 함수 방식 (클래스 없이 사용)

// 생성자 함수 선언
function Teacher(name) {
    this.name = name;
    this.group = 1;
}

// 프로토타입에 메서드를 추가함 (클래스처럼 동작하게 만드는 방식)
Teacher.prototype.introduce = function() {
    console.log(`Hi I'm ${this.name} from ${this.group}`);
};

// 생성자 함수로 인스턴스 만들기
const teacher = new Teacher("Yu");
teacher.introduce(); // "Hi I'm Yu from 1"

// ───────────────────────────────
// 📌 클래스와 생성자 함수의 주요 차이점

// 1️⃣ 클래스는 new 없이 호출하면 에러 발생 (생성자 함수는 호출됨)
// Student(); // ❌ TypeError: Class constructor Student cannot be invoked without 'new'

// 생성자 함수는 new 없이 호출해도 작동하지만 this는 전역(window/global)에 바인딩되므로 위험함
Teacher(); // ⚠️ 가능은 하지만 권장 X → this가 window에 붙음

// 2️⃣ 클래스에서 정의한 메서드는 for...in 반복문에 안 나옴 (열거 불가능)
for (let method in student) {
    console.log(`반복문 student : ${method}`); // name, group만 출력됨
}

// 생성자 함수에서 추가한 메서드는 for...in에 포함됨 (열거 가능)
for (let method in teacher) {
    console.log(`반복문 teacher: ${method}`); // name, group, introduce
}
