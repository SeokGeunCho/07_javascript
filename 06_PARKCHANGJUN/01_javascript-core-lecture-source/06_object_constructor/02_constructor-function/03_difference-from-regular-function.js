function Student(name, age) {
  console.log(this);
  this.name = name; // Student 객체의 name 프로퍼티
  this.age = age; // Student 객체의 age 프로퍼티
  this.getInfo = function () {
    // Student 객체의 메서드
    return `${this.name}(은)는 ${this.age}세 입니다.`;
  };
}

// 일반 함수와 생성자 함수의 형식적인 차이는 없다. (첫 문자를 대문자로 기술해서 구별하려고 노력한다.)
// 단, new 연산자와 함께 호출할 때 생성자 함수로 동작하며, new 연산자없이 호출하면 일반 함수도 동작한다.
const student = Student("강감찬", 35);
console.log(student);

// 일반 함수로 호출된 Student내의 this는 전역 객체를 가리킨다. 따라서 전역에서 참조 가능하다.

