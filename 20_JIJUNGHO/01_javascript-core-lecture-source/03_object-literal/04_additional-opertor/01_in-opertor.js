// in 연산자 : 프로퍼티의 존재 여부 확인
var student = {
  name: "유관순",
  age: 16,
  test: undefined,
};

console.log(student.name === undefined); // false
console.log(student.age === undefined); // false
console.log(student.test === undefined); // true
console.log("----------------------------");
console.log("name" in student); // true
console.log("age" in student); // true
console.log("test" in student); // true
console.log("test2" in student); // false
