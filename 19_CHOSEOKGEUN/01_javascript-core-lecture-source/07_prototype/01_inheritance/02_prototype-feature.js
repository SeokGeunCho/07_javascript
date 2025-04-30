// 프로토타입 객체 정의
const user = {
  id: "user",
  login() {
    console.log(`${this.id}님 로그인 되었습니다.`);
  },
};

// 프로토타입 상속을 통해 student 객체 생성
const student = {
  __proto__: user,
};

// student 객체에 id 프로퍼티 추가
// student.id = "user01";

// student 객체 출력
// console.log(student);

// student 객체의 login 메서드 호출
// login 메소드 내의 this는 프로토타입이 영향을 받지 않으며 this는 언제나 앞에 있는 객체를 의미한다.
student.login();

for (let key in student) {
  // for in 반복문은 상속 프로퍼티도 순회 대상에 포함시킨다.
  console.log(key);
  let isOwn = student.hasOwnProperty(key);
  if (isOwn) {
    console.log("객체 자신의 property : ${key}");
  } else {
    console.log(`상속 property : ${key}`);
  }
}
