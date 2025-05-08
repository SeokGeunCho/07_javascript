// 화살표 함수 기본 문법
// ES6에서 도입된 화살표 함수는 function 키워드 대신 화살표

// 기본 function 정의

message = () => {
  return `Arrow Function`;
};

console.log(message());
// 명령문이 하나인 경우 중괄호 생략 가능
// 함수 몸체 내부의 문이 값으로 평가될 수 있는 표현식인 문이라면 암묵적으로 반환
message = () => `Arrow Function2`;
console.log(message());

// 매개변수 있는 경우
message = (val1, val2) => 'Arrow' + val1 + val2;
console.log(message("Function", "!!!"));

// 매개변수가 하나라면 소괄호를 생략할 수 있다. 단 없거나 여러개면 생략 불가능하다.
message = val => 'Arrow' + val;
console.log(message('Function~'));



