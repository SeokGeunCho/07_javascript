// [JavaScript - 객체(Object) 리터럴 생성]

// 1. 객체(Object) 리터럴이란?
// - 중괄호({})를 사용해서 직접 "키-값 쌍"을 정의하는 방법
// - 가장 기본적이고 직관적인 객체 생성 방식

// 2. 객체 만들기
var student = {
    // 프로퍼티 (Property)
    // - 객체의 상태(정보)를 나타낸다.
    // - "키(Key) : 값(Value)" 형태로 구성된다.

    name: "유관순",    // 키(name): 값("유관순")
    age: 16,           // 키(age): 값(16)

    // 메서드 (Method)
    // - 객체가 수행할 수 있는 동작(기능)을 나타낸다.
    getInfo: function() {
        // this : 현재 객체(student)를 가리킨다.
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
};

// 3. 객체 타입 확인
console.log(typeof student); 
// 출력: object (객체는 항상 'object' 타입)

// 4. 객체 전체 출력
console.log(`student > `, student);
// 출력 예시: student > { name: '유관순', age: 16, getInfo: [Function: getInfo] }

// 5. 객체 메서드 호출
console.log(student.getInfo());
// 출력: 유관순(은)는 16세 입니다.

// 🔥 추가 꿀팁: ES6 문법으로 메서드 축약 가능
var student2 = {
    name: "안중근",
    age: 30,
    getInfo() { // function 키워드 생략 가능
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
};

console.log(student2.getInfo());
// 출력: 안중근(은)는 30세 입니다.

// 6. 빈 객체 생성
var emptyStudent = {};
console.log(typeof emptyStudent); // 출력: object
console.log(`emptyStudent > `, emptyStudent); // 출력: emptyStudent > {}
