// 클래스의 표현식

// 1. 익명 클래스 표현식
let Tutor = class {
  teach() {
    console.log("이해하셨나요?");
  }
};
new Tutor().teach();

// 2. 기명 클래스 표현식
let Tutee = class MyTutee {
  learn() {
    console.log("우와~~~~~ 아이 가릿");
  }
};
new Tutee().learn();
// new MyTutee().learn(); // error

// 3. 클래스의 동적 생성
function makeTutee(message) {
  return class {
    feedback() {
      console.log(message);
    }
  };
}
let ScondTutee = makeTutee("10점 만점에 10점");
new ScondTutee().feedback();
