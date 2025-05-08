// 문자열 타입으로 명시적 변환
// 1. String() 생성자 함수를 new 연산자 없이 호출
console.log(String(10)); 
console.log(String(NaN));
console.log(String(Infinity));
console.log(String(true));
console.log(String(false));

// 2. toString() 메서드 사용
console.log((10).toString()); // 10
console.log((NaN).toString()); // NaN
console.log((Infinity).toString()); // Infinity
console.log((true).toString()); // true
console.log((false).toString()); // false

// 3. 문자열 연결 연산자 사용