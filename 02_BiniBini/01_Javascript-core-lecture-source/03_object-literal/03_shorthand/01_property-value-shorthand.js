// [JavaScript - 프로퍼티 값 단축(축약) 구문]

// 1. 일반 객체 생성 방법 (ES5 스타일)
var id = 'p-00001';
var price = 30000;

var product = {
    id: id,      // 키: id, 값: id 변수의 값 ('p-00001')
    price: price // 키: price, 값: price 변수의 값 (30000)
};

console.log(product);
// 출력: { id: 'p-00001', price: 30000 }

// 2. 프로퍼티 값 축약(ES6부터 지원)
// - 변수명이 프로퍼티 키와 같을 경우, `키: 값` 형태를 생략할 수 있다
// - 변수 이름만 적어주면 키와 값 모두 자동으로 지정된다
var product2 = { id, price };

console.log(product2);
// 출력: { id: 'p-00001', price: 30000 }

// 요약:
// - 변수명 === 프로퍼티 키 이름이 같으면 축약 가능
// - 코드가 짧아지고 가독성이 좋아짐
