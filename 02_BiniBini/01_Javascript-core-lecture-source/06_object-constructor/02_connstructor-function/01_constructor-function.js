// [JavaScript - 생성자 함수(Constructor Function) 정리]

// ✅ 객체 리터럴 방식: 직접 하나하나 객체를 정의
const student = {
    name: "Yu",
    age: 16,
    getInfo: function () {
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
};

const student2 = {
    name: "Hong",
    age: 20,
    getInfo: function () {
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
};

// ❗ 객체 리터럴 방식의 한계:
// - 객체가 많아지면 매번 비슷한 구조를 반복해서 써야 함
// - 코드 재사용이 어렵고 비효율적임

// ✅ 생성자 함수 정의
// - 첫 글자는 관례적으로 대문자로 시작 (ex. Student)
// - 객체처럼 호출하지 않고 반드시 `new` 키워드와 함께 사용해야 함
function Student(name, age) {
    // this는 새로 생성되는 객체를 가리킴
    this.name = name;
    this.age = age;
    this.getInfo = function () {
        return `${this.name} is ${this.age} year(s) old`;
    };
}

// ✅ 생성자 함수로 인스턴스(객체) 생성
const student3 = new Student("Zhang", 35);
console.log(student3);           // Student { name: 'Zhang', age: 35, getInfo: [Function] }
console.log(student3.getInfo()); // Zhang is 35 year(s) old

const student4 = new Student("Sin", 40);
console.log(student4);           // Student { name: 'Sin', age: 40, getInfo: [Function] }
console.log(student4.getInfo()); // Sin is 40 year(s) old

/*
💡 생성자 함수 장점:
- 같은 구조의 객체를 반복해서 만들기 쉬움
- 중복 코드를 줄이고 유지보수성 향상

💡 주의사항:
- 반드시 `new` 연산자와 함께 사용해야 함
  (new 없이 호출하면 일반 함수처럼 동작하고 this가 window/global을 가리킬 수 있음)

- 생성자 함수 내부에서 `this`는 새로 생성되는 인스턴스를 의미함

💡 생성자 함수는 내부적으로 다음과 같은 일을 한다:
1. 빈 객체 생성: `const obj = {};`
2. this에 바인딩: `this = obj;`
3. 프로퍼티/메서드 추가: `this.name = name;` 등
4. 객체 반환: `return this;`
*/

// ✅ 참고: 프로토타입을 사용하면 메서드를 공유할 수 있어 더 효율적임
// (여기까지는 다음에 다루면 좋아요!)
