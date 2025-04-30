// null병합 연산자
// 좌항의 피연산자가 null 또는 undefined인 경우 우향의 피연산자를 반환하고
// 그렇지 않으면 좌항의 피연산자를 반환한다.
// 변수에 기본 값을 설정할 때 유용하다.
var obj = null;
var test = obj ?? '기본값';
console.log(`기본값???`, test);

var val = '' || '기본값'
console.log(`val >>>>`, val);
var val2 = '' ?? '기본값';
console.log(`val2 >>>>`, val2);