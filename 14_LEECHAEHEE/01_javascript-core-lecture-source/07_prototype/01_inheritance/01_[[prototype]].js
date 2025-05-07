// [[prototype]]
const user = {
  activate: true,
  login: function () {
    console.log("로그인이 되었습니다.");
  },
};

const student = {
  passion: true,
};

student.__proto__ = user; // __proto__는 [[prototype]]의 getter/setter이다.
// student의 프로토타입은 user이다. 또는 student는 user를 상속받는다고 표현한다.
console.log(student.passion);
console.log(student.activate);
student.login();

// 프로토타입 체인
const ohgiraffersStudent = {
  class: 2,
  __proto__: student,  
};
console.log(ohgiraffersStudent.class);
console.log(ohgiraffersStudent.passion);
console.log(ohgiraffersStudent.activate);
ohgiraffersStudent.login();