// [JavaScript - 생성자 함수의 prototype을 통한 상속]

// ✅ 상위 객체 user 정의
const user = {
    activate: true,
    login: function() {
        console.log("Logged in successfully");
    }
};

// ✅ 생성자 함수 정의 (Constructor function)
function Student(name) {
    // this는 새로 생성될 인스턴스를 가리킴
    this.name = name;
}

// ✅ prototype을 통해 상속 구조 정의
// Student로 생성되는 모든 객체들은 user를 상속받도록 설정
Student.prototype = user;

// ⚠️ 이 코드의 의미:
// - new Student()로 객체를 생성하면
// - 그 객체의 내부 [[Prototype]](즉 __proto__)은 Student.prototype을 참조함
// - 따라서 Student.prototype = user 라고 설정했으므로,
//   student.__proto__ → user 가 됨

// ✅ 인스턴스 생성
let student1 = new Student("Hong");
console.log(student1.name);      // "Hong" → student1 객체 자체의 고유 프로퍼티
console.log(student1.activate); // true   → user 객체에서 상속된 프로퍼티
student1.login();                // user 객체에서 상속된 메서드 실행

let student2 = new Student("Kim");
console.log(student2.name);      // "Kim"
console.log(student2.activate); // true
student2.login();                // "Logged in successfully"

/*
💡 prototype vs __proto__ vs [[Prototype]] 요약

- Student.prototype:
    생성자 함수(Student)가 가지고 있는 프로퍼티로,
    new 키워드로 생성된 객체의 __proto__에 할당된다.

- student1.__proto__ === Student.prototype → true
    즉, student1은 Student.prototype을 상속받고,
    우리가 그걸 user로 지정했기 때문에 student1 → user 상속 구조가 됨

📌 결론:
- Student.prototype = user; 를 통해
  모든 Student 인스턴스는 user 객체를 상속받게 됨.
- prototype은 메서드 공유에 쓰이기 때문에 효율적인 상속 구조를 만듦.
*/
