// [JavaScript - 단축 평가(Short-circuit Evaluation)]

// 단축 평가란?
// 표현식을 평가할 때 결과가 확정되면 나머지 연산을 생략하는 것

// 1. || (OR) 연산자
// - 왼쪽 값이 Truthy면, 그 값을 바로 반환하고 평가 종료
// - 왼쪽 값이 Falsy면, 오른쪽 값을 반환

console.log('apple' || 'banana'); 
// 출력: 'apple'
// 'apple'은 Truthy → 바로 'apple' 반환 (오른쪽 안 봄)

console.log('' || 'banana'); 
// 출력: 'banana'
// ''(빈 문자열)은 Falsy → 오른쪽 'banana'를 반환

// 2. && (AND) 연산자
// - 왼쪽 값이 Falsy면, 그 값을 바로 반환하고 평가 종료
// - 왼쪽 값이 Truthy면, 오른쪽 값을 반환

console.log('apple' && 'banana');
// 출력: 'banana'
// 'apple'은 Truthy → 오른쪽 'banana' 반환

console.log(false && 'banana');
// 출력: false
// false는 Falsy → 바로 false 반환 (오른쪽 안 봄)

console.log('apple' && 'banana');
// 다시 확인: 'apple'은 Truthy → 'banana' 반환

// 3. 단축 평가 활용 예시
// - 객체를 가리키는 변수가 null이나 undefined인지 확인할 때 사용 가능

var obj = null;

// var val = obj.value; 
// 이렇게 하면 obj가 null이므로 TypeError 발생!

// 안전하게 단축 평가를 활용:
var var2 = obj && obj.value;
// obj가 Falsy(null, undefined)이면 obj 자체(null)를 반환
// obj가 Truthy면 obj.value를 반환

console.log(var2);  
// 출력: null
// (obj가 null이니까, obj.value를 읽지 않고 바로 null 반환)
