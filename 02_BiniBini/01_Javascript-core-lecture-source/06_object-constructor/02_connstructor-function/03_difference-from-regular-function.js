// [JavaScript - 생성자 함수에서 new 키워드 없이 호출했을 때의 문제와 해결]

// ✅ 1. 생성자 함수 정의
function Student(name, age) {
    console.log("this:", this); // 이 this가 어디를 가리키는지 확인

    this.name = name;
    this.age = age;
    this.getInfo = function () {
        return `${this.name} is ${this.age} year(s) old.`;
    };

    // 일반 함수와 생성자 함수는 문법적 차이가 없기 때문에
    // 관례적으로 생성자 함수는 첫 글자를 대문자로 작성함
}

// ❌ 2. new 없이 생성자 함수 호출 (이건 매우 위험함!)
const student1 = Student("Kang", 35); // 일반 함수처럼 호출됨

console.log(student1);       // undefined (리턴값 없음)
console.log(name);           // Kang → 전역에 선언됨 ❗
console.log(age);            // 35 → 전역에 선언됨 ❗
console.log(getInfo());      // Kang is 35 year(s) old → 전역 함수 됨 ❗

/*
⚠️ 문제 발생 설명:
- new 없이 호출하면 일반 함수로 실행됨
- 내부의 this는 window/globalThis를 가리킴
- 그래서 this.name → window.name, this.age → window.age가 됨
- 결국 전역 객체가 오염됨 (의도치 않게 name, age, getInfo가 전역 변수로 생성됨)
*/

// ✅ 3. new 키워드와 함께 정상적으로 생성자 함수 호출
const student2 = new Student("Lee", 28);
console.log(student2);            // Student { name: 'Lee', age: 28, getInfo: [Function] }
console.log(student2.getInfo()); // Lee is 28 year(s) old

// 이 경우엔 this가 student2라는 새 객체를 정확히 가리킴 ✔️


// ✅ 4. 방어 코드: new 없이 호출된 경우를 자동으로 보정
function SafeStudent(name, age) {
    // instanceof로 this가 SafeStudent 생성자로부터 생성됐는지 확인
    if (!(this instanceof SafeStudent)) {
        return new SafeStudent(name, age); // new 없이 호출되면 강제로 new 붙여서 다시 호출
    }

    this.name = name;
    this.age = age;
    this.getInfo = function () {
        return `${this.name} is ${this.age} year(s) old.`;
    };
}

// ✅ new 없이 호출해도 안전함 (내부에서 new 붙여서 실행됨)
const student3 = SafeStudent("Yu", 21);
console.log(student3);             // SafeStudent { name: 'Yu', age: 21, getInfo: [Function] }
console.log(student3.getInfo());  // Yu is 21 year(s) old

// ✅ new 붙여도 역시 잘 동작함
const student4 = new SafeStudent("Kim", 22);
console.log(student4.getInfo()); // Kim is 22 year(s) old

/*
💡 핵심 정리:
- 생성자 함수는 반드시 new와 함께 호출해야 정상 동작한다
- new 없이 호출 시 this는 전역 객체(window/globalThis)를 가리키게 되어
  의도치 않게 전역 변수들이 생기는 전역 오염 문제가 발생함
- 이를 막기 위해 생성자 내부에서 instanceof로 체크하고
  new 없이 호출되면 강제로 new로 다시 호출하는 방어 코드를 사용할 수 있음
*/
