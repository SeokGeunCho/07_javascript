// [[Prototype]]
const user = {
  activate: true,
  login: function(){
    console.log("로그인이 되었습니다.");
    
  },
};

const student = {
  passion: true, 
};

student.__proto = user; // __ proto__는 [[Prototype]]의 getter setter

// student의 프로토타입은 user이다. 또는 student는 user를 상속 받는다.
console.log(student.passion);
console.log(student.activate);
student.login();

// 프로토타입 체인
const ohgiraffersStudent = {
  class: 2,
  __proto__: student,
  
};
console.log(ohgiraffersStudent.class);

