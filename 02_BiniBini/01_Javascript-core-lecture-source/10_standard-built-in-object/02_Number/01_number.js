// 📘 Number 객체
// 숫자랑 관련된 특별한 값들 (최댓값, NaN 등), 검사 함수, 변환 함수 등이 들어있는 내장 객체임
// 숫자 계산하거나 숫자 다룰 때 유용하게 씀


// ✅ 숫자 객체 생성

const n1 = new Number();         // 아무것도 안 넣으면 기본값 0이 들어감
const n2 = new Number(123);      // 숫자 넣으면 그 숫자가 들어감
const n3 = new Number("456");    // 문자열 숫자면 숫자로 자동 변환됨
const n4 = new Number("hello");  // 숫자로 못 바꾸는 문자열은 NaN으로 됨
console.log(n1, n2, n3, n4);     // 결과: [Number: 0], [Number: 123], [Number: 456], [Number: NaN]

// ⚠️ 대부분의 경우 new Number()는 안 씀
// let num = 10; 이런 식으로 원시 숫자 쓰는 게 보통임
// new Number()는 객체라서 비교할 때 헷갈릴 수 있음


// ✅ Number 상수들 (자바스크립트에 미리 정의된 숫자 관련 값들)

// 자바스크립트에서 쓸 수 있는 가장 큰 숫자
console.log(Number.MAX_VALUE);            // 1.7976931348623157e+308
console.log(Infinity > Number.MAX_VALUE); // true → Infinity는 말 그대로 무한대니까 더 큼

// 0보다 크고, 가장 작은 숫자 (진짜진짜 작은 양수)
console.log(Number.MIN_VALUE);            // 5e-324
console.log(Number.MIN_VALUE > 0);        // true → 그래도 0보단 큼

// 정확하게 계산 가능한 가장 큰 정수 (이 이상은 숫자 깨질 수 있음)
console.log(Number.MAX_SAFE_INTEGER);     // 9007199254740991

// 정확하게 계산 가능한 가장 작은 정수
console.log(Number.MIN_SAFE_INTEGER);     // -9007199254740991

// 양의 무한대, 음의 무한대
console.log(Number.POSITIVE_INFINITY);    // Infinity
console.log(Number.NEGATIVE_INFINITY);    // -Infinity

// 숫자가 아님을 나타내는 특수 값
console.log(Number.NaN);                  // NaN

// 아주아주 작은 숫자 (소수 계산할 때 오차 보정용으로 자주 씀)
console.log(Number.EPSILON);              // 2.220446049250313e-16

// 부동소수점 오차 예시: 자바스크립트는 0.1 + 0.2 = 0.3이 정확히 안 나옴
console.log(0.1 + 0.2);                   // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);           // false

// 이런 오차를 보정하려면 이렇게 비교함
function isEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}
console.log(isEqual(0.1 + 0.2, 0.3));     // true → 거의 같다고 판단함


// ✅ 숫자 검사 관련 함수들

// ▶ Number.isFinite(): 숫자고, Infinity나 NaN 아니면 true
console.log(Number.isFinite(100));        // true
console.log(Number.isFinite("100"));      // false → 문자열은 숫자 아님
console.log(isFinite("100"));             // true → 전역 isFinite()는 자동으로 형변환해줌 (주의)
console.log(Number.isFinite(null));       // false → null은 숫자 아님
console.log(Number.isFinite(Infinity));   // false
console.log(Number.isFinite(-Infinity));  // false

// ▶ Number.isInteger(): 정수인지 확인함
console.log(Number.isInteger(10));        // true
console.log(Number.isInteger(10.5));      // false → 소수라서 아님
console.log(Number.isInteger("10"));      // false → 문자열은 안 됨

// ▶ Number.isNaN(): 진짜 NaN인지 확인
console.log(Number.isNaN(NaN));           // true
console.log(Number.isNaN("hello"));       // false → 문자열은 NaN 자체가 아님
console.log(isNaN("hello"));              // true → 전역 isNaN은 문자열을 숫자로 바꿔보다 실패하면 NaN으로 침

// ▶ Number.isSafeInteger(): 정확하게 계산할 수 있는 정수인지 확인
console.log(Number.isSafeInteger(10));              // true
console.log(Number.isSafeInteger(1e30));            // false → 너무 커서 정밀도 떨어짐
console.log(Number.isSafeInteger("10"));            // false → 문자열이니까 false


// ✅ 숫자 변환 함수들

// ▶ toExponential(): 지수 표기법으로 바꿈 (과학 계산식처럼 보임)
console.log((123).toExponential());       // "1.23e+2"
console.log((1.23456).toExponential(2));  // "1.23e+0" → 소수점 2자리까지 표시

// ▶ toFixed(): 소수점 아래 자리수 고정해서 반올림된 문자열로 바꿈
console.log((1.23456).toFixed());         // "1" → 소수점 생략
console.log((1.23456).toFixed(3));        // "1.235" → 소수점 셋째자리까지 반올림

// ▶ toPrecision(): 전체 자리수 기준으로 표시 (반올림 포함됨)
console.log((123.456).toPrecision());     // "123.456"
console.log((123.456).toPrecision(2));    // "1.2e+2" → 유효 숫자 2자리로 표시됨

// ▶ toString(): 숫자를 문자열로 바꾸고, 진법 변환도 가능함
console.log((255).toString());     // "255" → 기본은 10진수
console.log((255).toString(2));    // "11111111" → 2진수
console.log((255).toString(8));    // "377" → 8진수
console.log((255).toString(16));   // "ff" → 16진수 (색상 표현 같은 데 자주 씀)
