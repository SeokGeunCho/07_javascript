// 논리 타입으로 암묵적 변환
// 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy(참으로 평가되는 값)
// 또는 Falsy(거짓으로 평가되는 값)으로 구분한다.
// Truthy -> true, Falsy -> false로 암묵적 타입 변환 된다.

if (undefined) console.log(`if(undefined)`); // false
if (null) console.log(`if(null)`); // false
if (0) console.log(`if(0)`); // false
if (1) console.log(`if(1)`); // true
if (2) console.log(`if(2)`); // true
if (NaN) console.log(`if(NaN)`); // false
if ("") console.log(`if("")`); // false
if ("a") console.log(`if("a")`); // true > 빈문자열이 아니라서 Truthy값이다.

// 결론 : undefined, null, 0 , NaN, ''(빈 문자열)은 Falsy 값이며,
//        이외의 모든 값들은 Truthy 값이다.
