// [JavaScript - null 병합 연산자 (??)]

// ?? 연산자
// - 좌항(앞쪽) 값이 null 또는 undefined이면 → 우항(뒷쪽) 값을 반환
// - 그렇지 않으면 좌항 값을 그대로 반환
// - 주로 "변수에 기본값 설정"할 때 많이 사용한다.

// 1. 기본 사용 예시
var obj = null;

// obj가 null이니까 '기본값' 반환
var test = obj ?? '기본값';

console.log(`기본값?`, test);
// 출력: 기본값? 기본값

// 2. 단축 평가 (||) vs null 병합 연산자 (??)

// 단축 평가(||) 사용
var val = '' || '기본값';
console.log(`val >`, val);
// 출력: val > 기본값
// 문제: ''(빈 문자열)은 Falsy이기 때문에 좌항이 무시되고 우항 반환
// → 원래 값('')을 살리고 싶어도 무조건 '기본값'이 됨

// null 병합 연산자(??) 사용
var val2 = '' ?? '기본값';
console.log(`val2 >`, val2);
// 출력: val2 > 
// 정상: ''(빈 문자열)은 null이나 undefined가 아니므로 좌항 '' 그대로 반환

// ✅ 요약
// || : Falsy(0, '', false 등) 값이면 우항 반환
// ?? : 오직 null 또는 undefined일 때만 우항 반환
