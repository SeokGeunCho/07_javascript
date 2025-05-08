// [JavaScript - Object 생성자 함수로 객체 만들기]

// ✅ 기본 개념:
// - `new Object()`는 자바스크립트 내장 생성자 함수인 `Object()`를 호출하여 빈 객체를 생성한다.
// - 이후 프로퍼티를 동적으로 추가해서 객체를 구성할 수 있다.

const student = new Object(); // 빈 객체 생성
student.name = "Hong";        // 프로퍼티 추가
student.age = 20;

console.log(student); // 출력: { name: 'Hong', age: 20 }


// ✅ Object 생성자 함수의 특징
// - 거의 사용되지 않고, 보통은 '객체 리터럴' 방식이 선호됨
// - 하지만 생성자 함수로 만든다는 점에서 구조적인 일관성을 갖는 데 사용할 수 있음


// ✅ 객체 리터럴 방식과 비교
const student2 = {
    name: "Yu",
    age: 21
};

console.log(student2); // 출력: { name: 'Yu', age: 21 }


// ✅ 참고: Object 생성자 함수는 내부적으로 아래와 동일하게 동작함
// new Object() === {} 와 같은 의미

// 이건 완전히 같은 결과
const obj1 = new Object();
const obj2 = {};

console.log(obj1); // {}
console.log(obj2); // {}

// 실제로는 객체 리터럴 {} 방식이 더 짧고 가독성이 좋기 때문에 일반적으로 더 많이 사용된다.
