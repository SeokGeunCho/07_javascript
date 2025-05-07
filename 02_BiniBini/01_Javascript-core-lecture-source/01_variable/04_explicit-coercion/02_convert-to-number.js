// [JavaScript - 숫자(Number) 타입으로 명시적 변환]

// 명시적 변환(explicit conversion): 개발자가 직접 숫자로 변환하는 것

// 1. Number 생성자 함수 호출
// 대문자 N으로 시작하는 Number() 함수를 사용해서 문자열, 불린 등을 숫자로 변환할 수 있다.

console.log(Number('10'));     // 출력: 10 (문자열 '10' → 숫자 10)
console.log(Number('10.01'));  // 출력: 10.01 (문자열 '10.01' → 숫자 10.01)
console.log(Number(true));     // 출력: 1 (true → 1)
console.log(Number(false));    // 출력: 0 (false → 0)

// 2. parseInt(), parseFloat() 함수 사용
// parseInt(): 문자열을 '정수(int)'로 변환
// parseFloat(): 문자열을 '실수(float)'로 변환

console.log(`parseInt('10') : ` + parseInt('10')); 
// 출력: 10

console.log(`parseInt('10.01') : ` + parseInt('10.01')); 
// 출력: 10 (소수점 아래는 버림)

console.log(`parseFloat('10') : ` + parseFloat('10')); 
// 출력: 10

console.log(`parseFloat('10.01') : ` + parseFloat('10.01')); 
// 출력: 10.01 (실수로 변환)

// 3. + 단항 산술 연산자 사용
// + 값 → 값을 숫자로 변환한다 (암묵적 변환)
// 예시가 빠져있지만, 아래처럼 사용할 수 있다:

console.log(+'10');    // 출력: 10
console.log(+'10.01'); // 출력: 10.01
console.log(+true);    // 출력: 1
console.log(+false);   // 출력: 0

// 4. * 산술 연산자 사용
// 문자열이나 불린을 숫자와 곱하면 숫자로 변환된다.

console.log(`'10' * 1 : `, '10' * 1);      // 출력: 10
console.log(`'10.01' * 1 : `, '10.01' * 1); // 출력: 10.01
console.log(`true * 1 : `, true * 1);      // 출력: 1
console.log(`false * 1 : `, false * 1);    // 출력: 0
