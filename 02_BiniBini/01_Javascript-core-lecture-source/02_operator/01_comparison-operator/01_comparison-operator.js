// [JavaScript - 비교 연산자 정리]

// 1. 동등 비교(==), 부등 비교(!=)
// - 타입이 다르면 암묵적으로 타입을 변환한 후 비교
// - 값만 비교

// 2. 일치 비교(===), 불일치 비교(!==)
// - 타입과 값 모두 같은지 비교 (엄격 비교)

// ------------------------------
// 숫자 1, 문자 '1', 논리값 true 비교
console.log(`1 == '1' : ${1 == '1'}`);       // true (문자 '1' → 숫자 1로 변환)
console.log(`1 == true : ${1 == true}`);     // true (true → 숫자 1로 변환)

console.log(`1 === '1' : ${1 === '1'}`);     // false (타입이 다름: number vs string)
console.log(`1 === true : ${1 === true}`);   // false (타입 다르고 값도 다름)

// ------------------------------
// 숫자 0, 문자 '0', 논리값 false, 빈 문자열 ''
console.log(`0 == '0' : ${0 == '0'}`);       // true ('0' → 숫자 0으로 변환)
console.log(`0 == false : ${0 == false}`);   // true (false → 숫자 0으로 변환)
console.log(`0 == '' : ${0 == ''}`);         // true ('' → 숫자 0으로 변환)

console.log(`0 === '0' : ${0 === '0'}`);     // false (타입 다름)
console.log(`0 === false : ${0 === false}`); // false (타입 다름)
console.log(`0 === '' : ${0 === ''}`);       // false (타입 다름)

// ------------------------------
// null 과 undefined
console.log(`null == undefined : ${null == undefined}`);   // true (특별 규칙)
console.log(`null === undefined : ${null === undefined}`); // false (타입 다름)

// ------------------------------
// NaN은 자기 자신과도 같지 않음
console.log(`NaN == NaN : ${NaN == NaN}`);           // false
console.log(`NaN === NaN : ${NaN === NaN}`);         // false
console.log(`Number.isNaN(NaN) : ${Number.isNaN(NaN)}`); // true
// → NaN 여부는 반드시 Number.isNaN()으로 검사해야 한다.

// ------------------------------
// 문자열 비교 (유니코드 순서 기준)
console.log(`'hello' === 'hello' : ${'hello' === 'hello'}`);   // true
console.log(`'hello' !== 'hello' : ${'hello' !== 'hello'}`);   // false

// 크기 비교 연산자 (<, >, <=, >=)
console.log(`'apple' < 'banana' : ${'apple' < 'banana'}`);     // true ('a' < 'b')
console.log(`'apple' > 'banana' : ${'apple' > 'banana'}`);     // false

// 참고: 문자열은 유니코드 값 순서대로 비교됨
// 예: 'a' < 'b', 'A' < 'a', 'Z' < 'a'
