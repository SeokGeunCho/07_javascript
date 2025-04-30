// [JavaScript - 객체의 프로퍼티 접근]

// 1. 객체 생성
var dog = {
    name: "뽀삐",
    eat: function(food) {
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요~`);
    }
};

// 2. 프로퍼티 접근 방법

// (1) 마침표 표기법 (Dot Notation)
// - 키 이름에 공백, 특수문자가 없을 때 사용
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

// ※ 대괄호 표기법에서는 키 이름을 반드시 '문자열'로 감싸야 한다!

// 3. 특수한 키를 가진 객체

var obj = {
    'dash-key': 'dash-value',  // 키에 특수문자가 포함되어 있어 대괄호 표기법이 필요
    0: 1                       // 숫자 키는 내부적으로 문자열('0')로 처리됨
};

// 마침표 표기법으로 접근하면 오류 발생
// console.log(`obj.dash-key >>> ${obj.dash-key}`); // ❌ 오류!

// 대괄호 표기법으로 올바르게 접근
console.log(`obj['dash-key'] >>> ${obj['dash-key']}`);
// 출력: obj['dash-key'] >>> dash-value

console.log(`obj[0] >>> ${obj[0]}`); 
// 출력: obj[0] >>> 1
