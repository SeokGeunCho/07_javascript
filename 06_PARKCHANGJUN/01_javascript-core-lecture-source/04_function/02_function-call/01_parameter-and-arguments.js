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

// 인수를 전달하지 않거나 undefined를 전달하면 기본값이 동작하도록 설정할 수 있다.
function hi(name = "아무개") {
  return `${name}, 안녕???`;
}

console.log(hi('강감찬'));
console.log(hi());

/*
함수 표현식은 변수에 할당된 후에만 실행됩니다. 즉, 함수 표현식은 코드 실행 중에 함수를 정의하기 때문에, 변수에 함수가 할당되기 전에 해당 함수를 호출하면 오류가 발생합니다.
함수의 매개변수와 인자
함수의 매개변수에는 반드시 인자가 들어갈 필요는 없습니다. 함수 선언문에서도 함수의 매개변수에 인자가 없더라도 함수는 정상적으로 실행됩니다. 그리고 인자 값이 제공되지 않으면 해당 매개변수는 undefined가 됩니다.
또한, 함수에 인자를 여러 개 넘기면, 그 값들은 arguments 객체에 순서대로 저장됩니다. arguments 객체는 배열처럼 접근할 수 있으며, 각 인자 값은 arguments[인덱스값] 형식으로 접근할 수 있습니다. 이 객체는 함수가 호출될 때마다 자동으로 생성되며, 전달된 인자들의 값을 포함하고 있습니다.
이 내용은 함수 선언문과 함수 표현식의 차이를 설명하는 글이며, 함수 선언문은 선언되기 전에 사용될 수 있는 반면, 함수 표현식은 변수에 할당된 후에만 호출이 가능합니다. 또한 arguments 객체에 대한 설명도 포함되어 있습니다.
*/