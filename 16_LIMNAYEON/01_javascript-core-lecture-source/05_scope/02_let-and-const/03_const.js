// const

// const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화 해야한다.
// const x;

const x = 1;

// 재할당이 금지된다.
// x = 100; //  Assignment to constant variable.

const student = {
  name: "홍길동",
  age: 20,
};

student.name = "유관순"; // 객체의 프로퍼티 값을 변경하는 것은 문제가 없다.
student.test = "테스트";
console.log(student);

// 객체를 재할당 하는 것은 불가능 하다.
// student = 1;
// console.log(">>>", student);
