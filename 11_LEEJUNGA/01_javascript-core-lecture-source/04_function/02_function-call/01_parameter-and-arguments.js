// 매개변수와 인수
function hello(name) {
  console.log(`arguments >>`, arguments);
  console.log(`arguments[0] >>> `, arguments[0]);
  return `${name}님 안녕하세요`;
}

// 매개변수는 함수 몸체 외부에서 사용할 수 없다.
// console.log(`name > `, name);

// 매개변수의 개수와 인수의 개수가 일치하는지 체크하지 않는다.
// 인수가 부족해서 할당되지 않은 매개변수의 값은 undefined이다.
var result = hello();
console.log(`result > `, result);

result = hello("유관순", "홍길동", "강감찬");
console.log(`result >>> `, result);

// 인수를 전달하지 않거나 undefined를 전달하며 기본값이 동작하도록 설정할 수 있다.
function hi(name = "아무개") {
  return `${name}, 안녕???`;
}

console.log(hi("강감찬"));
console.log(hi());
