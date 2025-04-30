// [JavaScript - 숫자 타입으로 암묵적 변환]

// JavaScript에서는 특정 상황에서 자동으로 타입이 '숫자(Number)'로 변환된다.

// 1. 산술 연산자 (-, *, /, %)
// 산술 연산을 하면 피연산자를 숫자 타입으로 암묵적으로 변환한다.

console.log(10 - '5');    // 출력: 5
// '5'가 숫자 5로 변환된 후 10 - 5 = 5

console.log(10 * '5');    // 출력: 50
// '5'가 숫자 5로 변환된 후 10 * 5 = 50

console.log(10 / '5');    // 출력: 2
// '5'가 숫자 5로 변환된 후 10 / 5 = 2

console.log(10 % '5');    // 출력: 0
// '5'가 숫자 5로 변환된 후 10 % 5 = 0

console.log(10 % 'JavaScript'); 
// 출력: NaN
// 'JavaScript'는 숫자로 변환 불가능 → 결과가 NaN(Not a Number)

// 2. 비교 연산자 (>, <, >=, <=)
// 비교 연산도 숫자로 변환한 뒤 비교한다.

console.log(10 > '5');    // 출력: true
// '5' → 숫자 5로 변환 후 10 > 5 → true

console.log(10 > '20');   // 출력: false
// '20' → 숫자 20으로 변환 후 10 > 20 → false

console.log(`10 > 'a' : ${10 > 'a'}`); 
// 출력: 10 > 'a' : false
// 'a' → NaN (숫자로 변환 불가)
// NaN은 어떤 값과도 비교할 수 없기 때문에 false가 된다.

// 추가 주의사항
console.log(`NaN == NaN : ${NaN == NaN}`);
// 출력: false
// NaN은 자기 자신과도 같지 않다!

console.log(`isNaN(NaN) : ${isNaN(NaN)}`);
// 출력: true
// NaN 여부를 확인하려면 반드시 isNaN() 함수를 사용해야 한다.

// 3. + 단항 연산자 (Unary Plus)
// + 피연산자 → 숫자 타입으로 변환 시도한다.

console.log(+'');          // 출력: 0  (빈 문자열 → 0)
console.log(+'1');         // 출력: 1  (문자열 '1' → 1)
console.log(+'JavaScript'); // 출력: NaN (문자열 'JavaScript' → 변환 불가)

console.log(+true);        // 출력: 1  (true → 1)
console.log(+false);       // 출력: 0  (false → 0)
console.log(+null);        // 출력: 0  (null → 0)
console.log(+undefined);   // 출력: NaN (undefined → 변환 불가)

// Symbol은 숫자로 변환 자체가 불가능 → 에러 발생
// console.log(+Symbol()); 
// → TypeError: Cannot convert a Symbol value to a number

// 기타 객체들 변환
console.log(+{});          // 출력: NaN
console.log(+[]);          // 출력: 0 (빈 배열은 0으로 변환)
console.log(+function(){}); // 출력: NaN

// 변환 요약:
// - 빈 문자열 '', 빈 배열 [], null, false → 0
// - true → 1
// - 객체 {}, undefined, 함수 → NaN
