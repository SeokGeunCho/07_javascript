// 022. 비교 연산자 (Comparison Operators)
// 비교 연산자는 두 값을 비교하여 true 또는 false를 반환합니다.
// ==, !=, ===, !==, >, <, >=, <=
// == : 동등 연산자 (Equality Operator) - 값만 비교합니다.
// != : 부등 연산자 (Inequality Operator) - 값만 비교합니다.
// === : 일치 연산자 (Strict Equality Operator) - 값과 타입을 모두 비교합니다.
// !== : 불일치 연산자 (Strict Inequality Operator) - 값과 타입을 모두 비교합니다.
console.log(5 == 5);    // true
console.log("5" == 5);  // true (문자열 "5"는 숫자 5로 변환되어 비교됨)
console.log(5 == '5');  // true (문자열 '5'는 숫자 5로 변환되어 비교됨)
console.log(5 != 1);    // true (5는 1과 다름)
console.log(5 != "1");  // true (문자열 "1"은 숫자 1로 변환되어 비교됨)
console.log(5 != "5");  // false (문자열 "5"는 숫자 5로 변환되어 비교됨)
console.log(5 === 5);   // true (5는 5와 같음)
console.log(5 === "5"); // false (5는 문자열 "5"와 다름)
console.log(5 !== 10);  // true (5는 10과 다름)
console.log(5 !== "5"); // true (5는 문자열 "5"와 다름)

// 022. 비교 연산자 (Comparison Operators) - 2
// >, <, >=, <= : 크기 비교 연산자 (Relational Operators) - 값의 크기를 비교합니다.
console.log(5 > 3);
console.log(5 < 3);
console.log(5 >= 3);
console.log(5 <= 6);
console.log(5 >= 5);


