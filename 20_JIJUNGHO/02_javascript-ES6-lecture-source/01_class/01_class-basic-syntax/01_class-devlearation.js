// 클래스 선언
class Student {
  // 생성자를 통해 인스턴스 생성 및 초기화
  constructor(name) {
    this.name = name; // 전달받은 인수로 인스턴스 초기화
    this.group = 1; // 고정 값을 인스턴스 초기화
  }
  // 프로토타입 메서드
  introduce() {
    console.log(`안녕하세요 저는 ${this.group}반 학생 ${this.name}입니다.`);
  }
}

/* Student 클래스를 선언하고 new Student()를 호출하면 새로운 객체가 생성되며
넘겨받은 인수 name과 함께 constructor가 자동으로 실행되어 "홍길동"이 this.name에 할당된다.
클래스 몸체에 정의한 메서드는 기본적으로 프로토타입 메서드가 된다.
*/

const student = new Student("홍길동");
student.introduce();

console.log(typeof Student); // function - 클래스는 함수의 한 종류이다.
console.log(Student === Student.prototype.constructor); // true
console.log(Student.prototype.introduce); // 클래스 내부에 정의한 메소드는 프로토타입에 추가된다.
console.log(Object.getOwnPropertyNames(Student.prototype)); // [ 'constructor', 'introduce' ]

// 클래스 문법과 유사하게 기능하는 것처럼 보이는 생성자 함수를 사용할 수 있다.
// 위와 똑같은 결과
function Teacher(name) {
  this.group = 1;
  this.name = name;
}
Teacher.prototype.introduce = function () {
  console.log(`안녕하세요 저는 ${this.group}반 교사 ${this.name}입니다.`);
};

const teacher = new Teacher("유관순");
teacher.introduce(); // 안녕하세요 저는 1반 교사 유관순입니다.

// 생성자 함수와 클래스의 차이점

// 1. 클래스 생성자를 new와 함께 호출하지 않으면 에러가 발생하도록 함
// [클래스] new 없이 호출 → 에러 발생
// Student(); // TypeError: Class constructor Student cannot be invoked without 'new'

// [생성자 함수] new 없이 호출 → 가능하지만 this가 의도한 바와 다를 수 있음
Teacher();

// 2. 클래스에 정의된 메소드는 열거 불가
for (method in student) {
  console.log(`반복문 student : ${method}`);
}

for (method in teacher) {
  console.log(`반복문 teacher : ${method}`);
}
