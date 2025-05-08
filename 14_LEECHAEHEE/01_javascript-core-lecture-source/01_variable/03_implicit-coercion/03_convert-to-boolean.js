// 논리 타입으로 암묵적 변환
// 자바스크립트 엔진은 boolean 타입이 아닌 값을 truthy(참) 또는 falsy(거짓)로 구분한다.
// Truthy 값은 true, Falsy 값은 false로 암묵적 타입 변환된다.

if(undefined) console.log(`if(undefined)`);   //false
if (null) console.log(`if(null)`);   //false
if (0) console.log(`if(0)`);   //false
if (1) console.log(`if(1)`);   //true
if (NaN) console.log(`if(NaN)`);   //false
if ('') console.log(`if('')`);   //false
if ('j') console.log(`if('j')`);   //true


// 결론 : undefined, null, 0, NaN, ''(빈문자열)은 falsy 값으로 변환되며, 
// 그 외의 모든 값은 truthy 값으로 변환된다.