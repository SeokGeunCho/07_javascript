// [JavaScript - 생성자 함수의 prototype과 constructor 관계]

// ✅ 생성자 함수 정의
function Student() {}

// ✅ 모든 함수는 기본적으로 prototype이라는 프로퍼티를 갖는다.
// 이 prototype은 "생성될 인스턴스"의 부모 역할을 하게 된다.

// 기본 구조는 다음과 같다:
// Student.prototype = {
//     constructor: Student
// }

console.log(Student.prototype.constructor); 
// ➜ Student 함수 자체를 출력 (자기 자신을 참조함)

console.log(Student.prototype.constructor === Student); 
// ➜ true (당연히 prototype.constructor는 원래 그 함수를 가리킴)


// ✅ 생성자 함수로 객체 생성
let student = new Student();

// 생성된 객체는 내부적으로 아래처럼 연결되어 있음:
// student.__proto__ === Student.prototype
// student.constructor → student.__proto__.constructor → Student

console.log(student.constructor); 
// ➜ Student 함수 출력됨

console.log(student.constructor === Student); 
// ➜ true (student는 Student에서 만들어졌음을 알 수 있음)

/*
📌 핵심 개념 요약:

1. 모든 함수는 기본적으로 prototype이라는 객체를 갖는다.
2. 그 prototype 객체는 내부에 constructor라는 프로퍼티를 가진다.
   이 constructor는 자신(함수)을 다시 참조한다.
3. 생성자 함수로 생성된 객체는
   내부적으로 해당 함수의 prototype을 상속받는다.
4. 따라서 생성된 인스턴스는 constructor를 통해
   "나를 만든 함수가 누구인지"를 알 수 있다.

💡 constructor는 다음과 같은 상황에서 유용함:
- 인스턴스가 어떤 생성자 함수로부터 생성되었는지 확인할 때
- 복제(복사)하거나 다시 인스턴스를 만들 때
  const copy = new obj.constructor();
*/

