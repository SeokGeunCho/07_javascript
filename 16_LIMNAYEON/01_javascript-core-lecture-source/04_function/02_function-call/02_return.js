// 반환문
function hello(name){
  // 반환문
  return `${name}님 안녕하세요.`;
  // 반환문 이후에 코드는 실행되지 않고 무시된다.
  console.log(name);
  
}
console.log(hello("유관순"));

// 반환 값이 없는 함수
function func(){
  console.log(`함수가 호출되었습니다.`);
  // 반환 값이 없는 경우 return 구문 생략 가능하며 암묵적으로 undefined 된다.
  return ;
}

console.log(func());

