// 함수 호이스팅

// 함수 선언문은 런타임 이전에 자바스크립ㅌ 엔진에 의해 먼저 실행된다.
// 따라서 함수 선언 이전에 함수 참조 및 호출이 가능하다.
// 함수 선언문이 코드의 선두로 끌려올려진 것처럼 동작하는것을 "함수 호이스팅" 이라고 한다.
console.log(hello("지정호"));
console.log(hi("ghdi"));

// 함수 선언문
function hello(name) {
  return `${name}님 안녕~`;
}

var hi = function (name) {
  return `${name}님 안녕~`;
};
