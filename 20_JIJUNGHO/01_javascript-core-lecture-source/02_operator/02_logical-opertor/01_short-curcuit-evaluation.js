// 단축평가
// 표현식을 평가하는 도중 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는것
// &&, || 연산자 표현식의 결과가 때로는 boolean값이 아닐 수도 있다.
/* 
왼쪽 피연산자가 falsy (예: false, 0, "", null, undefined, NaN)이면 → 왼쪽 피연산자 반환
왼쪽 피연산자가 truthy이면 → 오른쪽 피연산자 반환
 */

console.log("apple" || "banana"); // apple
console.log("" || "banana"); // banana

console.log(`apple` && `banana`); // banana
console.log(false && `banana`); // false

// 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고,
// 프로퍼티를 참조할 때 단축 평가를 활용할 수 있다.
var obj = null;
// var val = obj.value;
// obj가 Falsy(null, undefined) 값이면 좌항만 실행하여 val2 -> null
// obj가 Truthy값이면 val2 -> obj.value
var val2 = obj && obj.value;
console.log(val2); // null
