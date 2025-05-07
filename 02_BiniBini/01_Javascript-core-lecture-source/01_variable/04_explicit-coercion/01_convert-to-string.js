// [JavaScript - 문자열(String) 타입으로 명시적 변환]

// 명시적 변환(explicit conversion): 개발자가 직접 타입 변환을 명령하는 것

// 1. String 생성자 함수 호출
// 대문자 S로 시작하는 String() 함수를 사용하면
// 값을 명시적으로 문자열로 변환할 수 있다.
// (new 없이 호출하면 문자열 변환)

console.log(String(10));        // 출력: '10'
console.log(typeof String(10)); // 출력: string

console.log(String(NaN));       // 출력: 'NaN'
console.log(String(Infinity));  // 출력: 'Infinity'
console.log(String(true));      // 출력: 'true'
console.log(String(false));     // 출력: 'false'

// 2. toString() 메서드 사용
// 숫자, 불린 등의 값은 .toString() 메서드를 통해 문자열로 변환할 수 있다.

console.log((10).toString());       // 출력: '10'
console.log((NaN).toString());       // 출력: 'NaN'
console.log((Infinity).toString());  // 출력: 'Infinity'
console.log((true).toString());      // 출력: 'true'
console.log((false).toString());     // 출력: 'false'

// 3. 문자열 연결 연산자(+) 사용
// 숫자나 불린값을 빈 문자열('')과 + 연산하면 문자열로 변환된다.

console.log(10 + '');         // 출력: '10'
console.log(NaN + '');        // 출력: 'NaN'
console.log(Infinity + '');   // 출력: 'Infinity'
console.log(true + '');       // 출력: 'true'
console.log(false + '');      // 출력: 'false'
