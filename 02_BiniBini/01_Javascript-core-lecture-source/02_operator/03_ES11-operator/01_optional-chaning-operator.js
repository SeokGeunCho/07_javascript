// [JavaScript - Optional Chaining (옵셔널 체이닝) 연산자]

// ?. 연산자
// - 좌항(앞쪽) 값이 null 또는 undefined이면 평가를 멈추고 undefined 반환
// - 그렇지 않으면 우항(뒷쪽) 프로퍼티 참조를 이어간다.
// - 주로 안전하게 객체 프로퍼티를 접근할 때 사용
// - React 같은 라이브러리에서도 많이 사용!

// 1. 기본 사용법
var obj = null;

// var val = obj.value; 
// → 이렇게 직접 접근하면 obj가 null이라서 TypeError 발생!

// 안전하게 Optional Chaining 사용
var val = obj?.value;

console.log(`val : `, val);  
// 출력: val : undefined
// (obj가 null이니까 obj?.value는 undefined를 반환)

// 2. 단축 평가로 접근할 때 문제점
// 예전에는 && 연산자로 단축 평가를 많이 썼는데,
// Falsy 값('', 0 등)도 null처럼 취급하는 문제가 있었다.

var str = '';  // 빈 문자열

// 단축 평가 사용
var len = str && str.length;
console.log(`len >`, len);
// 출력: len > ''
// 문제: str이 빈 문자열('') → Falsy → 바로 '' 반환 (length 접근조차 못함)

// Optional Chaining 사용
var len2 = str?.length;
console.log(`len2 >`, len2);
// 출력: len2 > 0
// 정상 작동: str이 null/undefined가 아니므로 str.length(=0)까지 제대로 접근함

// ✅ Optional Chaining은 오직 'null' 또는 'undefined'일 때만 멈춘다!
// ''(빈 문자열), 0(숫자 0), false(불린값)은 정상적으로 우항까지 이어진다.
