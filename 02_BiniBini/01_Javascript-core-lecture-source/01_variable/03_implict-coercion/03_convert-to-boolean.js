// [JavaScript - 논리 타입(불린)으로 암묵적 변환]

// 🚨 중요!
// JavaScript 엔진은 불리언 타입이 아닌 값도 '참(T)' 또는 '거짓(F)'으로 구분한다.

// - Truthy: true로 평가되는 값
// - Falsy: false로 평가되는 값

// 값이 조건문(if 등)에서 어떻게 평가되는지 예시

if (undefined) console.log(`if(undefined)`); 
// 출력 안 됨 → undefined는 Falsy (거짓)

if (null) console.log(`if(null)`); 
// 출력 안 됨 → null도 Falsy

if (0) console.log(`if(0)`); 
// 출력 안 됨 → 0도 Falsy

if (1) console.log(`if(1)`); 
// 출력: if(1) 
// 1은 Truthy → if문이 실행된다.

if (2) console.log(`if(2)`); 
// 출력: if(2) 
// 2도 Truthy → if문이 실행된다.

if (NaN) console.log(`if(NaN)`); 
// 출력 안 됨 → NaN은 Falsy

if ('') console.log(`if('')`); 
// 출력 안 됨 → ''(빈 문자열)은 Falsy

if ('a') console.log(`if('a')`); 
// 출력: if('a') 
// 'a'(빈 문자열이 아닌 문자열)는 Truthy → if문 실행

// ✅ 결론 요약
// Falsy 값 목록 (조건식에서 false로 평가됨):
// - undefined
// - null
// - 0
// - NaN
// - '' (빈 문자열)

// 이 외의 값은 모두 Truthy (true로 평가됨) 이다!
