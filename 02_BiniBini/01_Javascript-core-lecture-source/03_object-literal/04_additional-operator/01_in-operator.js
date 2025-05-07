// [JavaScript - in 연산자로 프로퍼티 존재 여부 확인]

// 1. 객체 생성
var student = {
    name: '유관순',
    age: 16,
    test: undefined
};

// 2. 단순 비교 (=== undefined)
// - 프로퍼티의 값이 undefined이면 없는 것처럼 보일 수 있다
console.log(student.name === undefined);  // false (name은 존재하고 값도 있음)
console.log(student.age === undefined);   // false (age는 존재하고 값도 있음)
console.log(student.test === undefined);  // true  (test 프로퍼티는 존재하지만 값이 undefined)

// ※ 주의: 
// 단순히 `=== undefined`로 체크하면,
// '값이 없는 것'과 '프로퍼티가 아예 없는 것'을 구별할 수 없다!

// 예를 들어, 존재하지 않는 프로퍼티를 비교해도 같은 결과
console.log(student.test1 === undefined); // true (test1은 아예 없는 프로퍼티)


// 3. in 연산자 사용
// - 객체 안에 해당 "프로퍼티 키"가 실제로 존재하는지 확인
console.log("name" in student);   // true (name 프로퍼티가 존재)
console.log("age" in student);    // true (age 프로퍼티가 존재)
console.log("test" in student);   // true (test 프로퍼티가 존재, 값은 undefined여도 존재함)
console.log("test1" in student);  // false (test1 프로퍼티는 아예 없음)

// ✔ 'in' 연산자는 프로퍼티가 실제 존재하는지만 확인한다 (값이 무엇이든 상관없음)
