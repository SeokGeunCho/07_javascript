// [JavaScript - 객체의 프로퍼티 접근(완벽 정리)]

// 1. 객체(Object) 생성
var dog = {
    name: "뽀삐",                  // 프로퍼티: 키(name) - 값("뽀삐")
    eat: function(food) {          // 메서드: 객체가 수행할 수 있는 기능
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요~`);
    }
};

// 2. 프로퍼티 접근 방법

// (1) 마침표 표기법 (Dot Notation)
// - 키 이름이 일반적인 식별자(공백, 특수문자 없음)일 때 사용
console.log(`dog.name >>> ${dog.name}`);  
// 출력: dog.name >>> 뽀삐

dog.eat('닭가슴살');
// 출력: 뽀삐(은)는 닭가슴살를 맛있게 먹어요~

// (2) 대괄호 표기법 (Bracket Notation)
// - 키 이름에 공백, 특수문자가 있거나 변수를 사용할 때 사용
console.log(`dog['name'] >>> ${dog['name']}`);
// 출력: dog['name'] >>> 뽀삐

dog['eat']('닭가슴살');
// 출력: 뽀삐(은)는 닭가슴살를 맛있게 먹어요~

// (주의) 대괄호 표기법에서는 반드시 키 이름을 "문자열"로 감싸야 한다!

// 3. 특수한 키를 가진 객체

var obj = {
    'dash-key': 'dash-value',  // 특수문자가 포함된 키는 따옴표 필요
    0: 1                       // 숫자 키는 내부적으로 문자열('0')로 변환되어 저장
};

// 마침표 표기법으로는 특수문자 키 접근 불가 (에러 발생)
// console.log(`obj.dash-key >>> ${obj.dash-key}`); // ❌ 문법 오류

// 대괄호 표기법으로 올바르게 접근
console.log(`obj['dash-key'] >>> ${obj['dash-key']}`);
// 출력: obj['dash-key'] >>> dash-value

console.log(`obj[0] >>> ${obj[0]}`);
// 출력: obj[0] >>> 1

// 4. 동적으로 키 접근하기
var keyName = 'name';
console.log(`dog[keyName] >>> ${dog[keyName]}`);
// 출력: dog[keyName] >>> 뽀삐

// (key가 변수로 정해져 있을 때는 무조건 대괄호 표기법 사용!)


// [추가 개념 요약]

// ✔ 객체(Object) : 여러 개의 프로퍼티(Property)를 담는 구조
// ✔ 프로퍼티(Property) : "키(key) : 값(value)" 쌍
// ✔ 메서드(Method) : 값이 함수(function)인 프로퍼티 (동작)

// ✔ 마침표 표기법(dot notation)
// - 키가 정상적인 식별자(공백, 특수문자 없음)일 때 사용
//   예) obj.key

// ✔ 대괄호 표기법(bracket notation)
// - 키에 공백, 특수문자가 있거나
// - 동적으로 키를 다룰 때 사용
//   예) obj['key'] 또는 obj[변수]

// ✔ 숫자 키
// - 내부적으로 문자열로 변환되어 저장된다 ('0', '1', 등)

// ✔ 특수문자나 공백이 있는 키
// - 반드시 따옴표("")로 묶어야 하며 대괄호 표기법으로 접근해야 한다

// ✔ 키 중복
// - 같은 키가 중복될 경우, 나중에 작성한 값으로 덮어쓰게 된다
