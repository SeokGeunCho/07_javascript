// [JavaScript - 객체의 프로퍼티 접근(완성판 정리)]

// 1. 객체(Object) 생성
var dog = {
    name: "뽀삐",
    eat: function(food) {
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요~`);
    }
};

// 2. 프로퍼티 접근 방법

// (1) 마침표 표기법 (Dot Notation)
console.log(`dog.name >>> ${dog.name}`);  
dog.eat('닭가슴살');

// (2) 대괄호 표기법 (Bracket Notation)
console.log(`dog['name'] >>> ${dog['name']}`);
dog['eat']('닭가슴살');

// (주의) 대괄호 표기법에서는 키 이름을 반드시 "문자열"로 감싸야 한다!

// 3. 특수한 키를 가진 객체

var obj = {
    'dash-key': 'dash-value',
    0: 1
};

// 특수문자 키는 대괄호 표기법으로 접근
console.log(`obj['dash-key'] >>> ${obj['dash-key']}`);
console.log(`obj[0] >>> ${obj[0]}`);

// 4. 동적으로 키 접근하기
var keyName = 'name';
console.log(`dog[keyName] >>> ${dog[keyName]}`);


// [추가 개념 요약]

// ✔ 객체(Object) : 여러 개의 프로퍼티(Property)를 담는 구조
// ✔ 프로퍼티(Property) : "키(key) : 값(value)" 쌍
// ✔ 메서드(Method) : 값이 함수(function)인 프로퍼티 (동작)

// ✔ 마침표 표기법(dot notation) : 키가 정상적 식별자일 때 사용
// ✔ 대괄호 표기법(bracket notation) : 키에 공백, 특수문자가 있거나 동적 접근할 때 사용
// ✔ 숫자 키는 내부적으로 문자열로 변환
// ✔ 특수문자/공백 포함 키는 따옴표("") 필수
// ✔ 중복 키는 마지막 값으로 덮어씀


// ===============================
// [JavaScript - 프로퍼티 수정, 추가, 삭제]
// ===============================

// 5. 프로퍼티 수정, 추가, 삭제

// (1) 수정하기
dog.name = '두부'; // 기존 name 프로퍼티 수정
console.log(dog);
// 출력: { name: '두부', eat: [Function: eat] }

// (2) 추가하기
dog.age = 3;      // 존재하지 않는 프로퍼티에 값을 할당하면 자동으로 추가
console.log(dog);
// 출력: { name: '두부', eat: [Function: eat], age: 3 }

// 또는 대괄호 표기법으로 추가 가능
dog['color'] = 'white';
console.log(dog);
// 출력: { name: '두부', eat: [Function: eat], age: 3, color: 'white' }

// (3) 삭제하기
delete dog.age;   // 프로퍼티 삭제
console.log(dog);
// 출력: { name: '두부', eat: [Function: eat], color: 'white' }

// 존재하지 않는 프로퍼티를 삭제해도 오류 없이 무시된다
delete dog.something;
console.log(dog);
// 출력 그대로 유지
