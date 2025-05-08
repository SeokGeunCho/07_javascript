// 생성자 함수 프로토타입
const user = {
  activate: true,
  login: function () {
    console.log("로그인이 되었습니다.");
  },
};

// 생성자 함수수
function Student(name) {
  this.name = name;
}
// 일반 프로퍼티
Student.prototype = user;

// Function.prototype은 new Function()을 호출할 때만 사용되며
// 이 때 만들어지는 객체의 [[prototype]]을 할당한다.
let student = new Student('홍길동');
console.log(student.name); // 본인 프로퍼티
console.log(student.activate); // 상속 프로퍼티
student.login();  // 상속 프로퍼티

let student2 = new Student('유관순');
console.log(student2.name); // 본인 프로퍼티
console.log(student2.activate); // 상속 프로퍼티
student2.login();  // 상속 프로퍼티
