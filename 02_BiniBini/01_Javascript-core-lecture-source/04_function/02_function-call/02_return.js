// 반환문
function hello(name) {
    // 반환문
    return `${name}님 안녕하세요!`;
    console.log(name); // return 이후의 코드는 실행되지 않고 그냥 무시됨
}

console.log(hello("유관순"));

// 반환 값이 없는 함수
 function func(){
    console.log(`함수가 호출되었습니다.`);
    // 반환 값이 없는 경우 return 구문 생략 가능하며 암묵적으로 undefined가 반환됨
    return; // 반환 값이 명시적으로 작성되지 않은 경우도 undefined가 반환됨
 }
 console.log(func());


