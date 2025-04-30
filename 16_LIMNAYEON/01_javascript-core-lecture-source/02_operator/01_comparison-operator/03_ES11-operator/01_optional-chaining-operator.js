// 옵셔널 체이닝 연산자
// 좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고고
// 단축평가를 이용하면 빈문자열과 같은 Falsy값을 false로 취급하는 문제가 있었다.
var obj = null;
var val = obj?.value;
