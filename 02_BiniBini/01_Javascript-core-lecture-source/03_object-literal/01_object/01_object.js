// [JavaScript - 객체(Object) 리터럴 생성]

// 1. 객체(Object) 리터럴이란?
// 중괄호({})를 이용해서 "키-값 쌍"을 직접 정의하는 방법
// (가장 기본적이고 직관적인 객체 생성 방식)

// 2. 객체 만들기
var student = {
    // 프로퍼티 (Property)
    // - 객체의 상태(정보)를 나타낸다.
    // - 키(Key) : 값(Value) 쌍으로 구성된다.

    name: "유관순",   // 키(name) : 값("유관순")
    age: 16,          // 키(age) : 값(16)

    // 메서드 (Method)
    // - 객체가 가지고 있는 동작(기능)
    getInfo: function() {
        // this는 현재 객체(student)를 가리킨다.
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
};

// 3. 객체 타입 확인
console.log(typeof student);
// 출력: object
// 객체 타입은 항상 'object'로 나온다.

console.log(`student > `, student);
// 출력: student > { name: '유관순', age: 16, getInfo: [Function: getInfo] }

// 4. 객체 메서드 호출 (추가 예시)
console.log(student.getInfo());
// 출력: 유관순(은)는 16세 입니다.

// 추가 꿀팁: 
// ES6 이후에는 메서드를 더 간단하게 작성할 수도 있다:
var student = {
    name: "유관순",
    age: 16,
    // 메서드: 프로퍼티를 참조하고 조작할 수 있는 동작
    getInfo() { // function 키워드 생략 가능
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
};

// 프로퍼티를 정의하지 않은 빈 객체 생성
var student2 = {};
console.log(typeof student2);
console.log(`student2 > `, student2);