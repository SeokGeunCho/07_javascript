if (true) {
    var functionScopeValue = 'global';
    let blockScopeValue = 'local';
}
console.log(functionScopeValue); // global
console.log(blockScopeValue); // ReferenceError

// 041-1 let과 const의 스코프
// let과 const는 블록 레벨 스코프를 지원합니다. 즉, 변수가 선언된 블록 내에서만 유효합니다.
// var는 함수 레벨 스코프를 지원합니다. 즉, 변수가 선언된 함수 내에서만 유효합니다. 블록 레벨 스코프는 지원하지 않습니다.
let value = "바깥값"
if (true) {
    console.log(value);
    let value = "안쪽값";
}
