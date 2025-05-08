// [JavaScript - 일급 객체(First-Class Object)란?]

// ✅ 정의:
// - 일급 객체는 다음 조건을 "모두" 만족하는 값이다.
//   1. 리터럴로 생성 가능 (즉, 런타임 중 생성 가능)
//   2. 변수나 자료구조(객체, 배열 등)에 저장 가능
//   3. 함수의 인자로 전달 가능
//   4. 함수의 반환값으로 사용 가능

// ✅ JavaScript에서는 "함수"가 일급 객체이다!

// 1. 함수 리터럴로 생성 (익명 함수, 런타임 중 생성 가능)
var hello = function () {
    return "안녕!";
};

// 2. 객체의 프로퍼티에 함수 저장 (값처럼 다룰 수 있음)
var obj = {
    hello // ES6 축약 표현 (hello: hello)
};

// 3. 함수의 인자로 전달 가능 (고차 함수 예시)
function callFunction(func) {
    console.log("👉 콜백 실행 결과:", func());
}
callFunction(obj.hello); // 👉 콜백 실행 결과: 안녕!

// 4. 함수의 반환값으로 사용 가능
function returnFunction() {
    return function() {
        return "👋 나는 리턴된 함수야!";
    };
}
var newFunc = returnFunction();   // 함수 리턴받음
console.log(newFunc());           // 👋 나는 리턴된 함수야!

// 추가 예시: 함수 전달 + 반복 실행
function repeat(func, count) {
    for (var i = 0; i < count; i++) {
        console.log(`[${i + 1}] ${func()}`);
    }
}

// 콜백으로 전달
repeat(obj.hello, 5);

// ❌ 아래 코드는 잘못된 사용: repeat 함수는 값을 반환하지 않음
// var returnFunc = repeat(obj.hello, 10);
// returnFunc(); // => 오류 발생 (returnFunc은 undefined임)

// 🛠 올바른 반환 사용 예시
function makeRepeater(func, count) {
    return function () {
        for (var i = 0; i < count; i++) {
            console.log(`[반복 ${i + 1}] ${func()}`);
        }
    };
}

var repeater = makeRepeater(obj.hello, 3); // 함수 반환됨
repeater(); // 실행
