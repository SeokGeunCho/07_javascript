// [JavaScript - 생성자 함수의 인스턴스 생성 과정 정리]

// ✅ 생성자 함수란?
// - 객체를 생성하기 위한 일종의 '틀'이다.
// - 반복되는 객체 구조를 효율적으로 만들기 위해 사용된다.
// - 반드시 `new` 연산자와 함께 사용해야 하며,
//   내부에서는 암묵적으로 객체(this)를 생성하고 반환한다.

function Student(name, age) {
    // ✅ 1. new와 함께 호출되면 자바스크립트 엔진이 아래 작업을 암묵적으로 수행:
    // const this = {};  // 내부적으로 빈 객체 생성됨
    console.log("Check >>", this); // 생성 중인 this를 확인할 수 있음

    // ✅ 2. 생성된 this에 프로퍼티/메서드를 추가
    this.name = name;
    this.age = age;

    this.getInfo = function () {
        return `${this.name} is ${this.age} year(s) old`;
    };

    // ✅ 3. return this; // 명시하지 않아도 자동으로 반환됨
}

// ✅ 인스턴스 생성
const student1 = new Student("Zang", 45);
console.log(student1);             // Student { name: 'Zang', age: 45, getInfo: [Function] }
console.log(student1.getInfo());   // Zang is 45 year(s) old

// ✅ 동일한 객체를 일반 객체 리터럴로 만든 경우 (비효율적)
const test = {};
test.name = "Hong";
test.age = 20;
test.getInfo = function () {
    return `${this.name} is ${this.age} year(s) old`;
};
console.log(test.getInfo());       // Hong is 20 year(s) old


// ✅ 생성자 함수의 return 동작 예제들

// case 1: return이 없을 때 → this가 자동으로 반환됨
function NoReturn(name, age) {
    this.name = name;
    this.age = age;
}
const a = new NoReturn("Kim", 30);
console.log(a); // NoReturn { name: 'Kim', age: 30 }

// case 2: return 객체 → 명시한 객체가 this 대신 반환됨
function ReturnObject(name, age) {
    this.name = name;
    this.age = age;

    return {
        name: "Override",
        age: 99
    };
}
const b = new ReturnObject("Park", 40);
console.log(b); // { name: 'Override', age: 99 } ❗ this 무시됨

// case 3: return 원시값 → 무시되고 this가 반환됨
function ReturnPrimitive(name, age) {
    this.name = name;
    this.age = age;

    return 123; // ❗ 원시값은 무시됨
}
const c = new ReturnPrimitive("Lee", 50);
console.log(c); // ReturnPrimitive { name: 'Lee', age: 50 } ✅ this 반환됨

/*
💡 생성자 함수의 동작 순서 요약

new Student("Zang", 45); 호출 시 내부에서:
1. 빈 객체 생성 → this = {}
2. this.name = name; this.age = age; 등 추가
3. return this; // 자동 실행됨 (명시하지 않아도 됨)
4. 단, return으로 객체를 명시하면 그 객체가 반환됨!
   return으로 원시값을 명시하면 무시되고 this 반환됨
*/


// ✅ 결론: 생성자 함수 특징 요약

/*
| 항목                 | 설명                                                    |
|----------------------|---------------------------------------------------------|
| 사용 방식            | `new 생성자함수()`                                      |
| this의 의미          | 새로 만들어질 인스턴스를 가리킴                         |
| return 생략 가능 여부| O (this가 자동 반환됨)                                  |
| return 객체 시 동작  | 명시된 객체가 반환되고 this는 무시됨                   |
| return 원시값 시 동작| 무시되고 this가 반환됨                                  |
| 메서드 직접 작성 시 문제 | 인스턴스마다 중복 정의됨 (→ prototype으로 개선 필요) |
*/

