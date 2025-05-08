// 숫자 타입으로 암묵적 변환

// 1. 산술 연산자
console.log(10 - '5');
console.log(10 * '5');
console.log(10 / '5');
console.log(10 % '5');
console.log(10 % 'javascript');  // NaN - 피연산자 숫자 변환 불가로 연산 수행 불가

// 2. 비교 연산자
console.log(10 > '5');
console.log(10 > '20');
console.log(`10 > 'a' : ${10 > 'a'}`); // 문자는 모두 NaN으로 변환되어 비교 불가능하여 항상 false

// 참고: NaN끼리 비교 연산자 사용도 불가능하므로 isNaN() 함수를 이용해서 확인해야 한다.
console.log(`NaN == NaN : ${NaN == NaN}`);
console.log(`isNaN(NaN) : ${isNaN(NaN)}`); 

// 3. +단항 연산자
// 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적 타입 변환 수행
console.log(+'');  // 0
console.log(+'2'); // 2
console.log(+'1'); // 1
console.log(+'javascript'); // NaN - 숫자 변환 불가
console.log(+true);   // 1 - true는 숫자 1로 변환
console.log(+false); // 0 - false는 숫자 0으로 변환
console.log(+null); // 0 - null은 숫자 0으로 변환
console.log(+undefined); // NaN - undefined는 숫자 변환 불가
// console.log(+Symbol()); // 오류 발생
console.log(+{}); // NaN - 객체는 숫자 변환 불가
console.log(+[]);   // 0 - 빈 배열은 숫자 변환 시 0으로 변환
console.log(+function(){}); // NaN - 함수는 숫자 변환 불가



