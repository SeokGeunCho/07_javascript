// 함수 호이스팅 (Function Hoisting)
// 함수 선언문은 호이스팅이 된다.
// 함수 표현식은 호이스팅이 되지 않는다.
// 함수 선언문은 코드가 실행되기 전에 메모리에 올라간다.
// 함수 표현식은 코드가 실행될 때 메모리에 올라간다.

hello();
function hello() {
    console.log("안녕하세요");
    
}

hello2();
var hello2 = function() {
    console.log("안녕하세요");   
}
