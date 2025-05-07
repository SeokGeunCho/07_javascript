// 문자열 타입으로 명시적 변환

// 1. String 생성자 함수를 new 연산자 없이 호출
console.log(`1. String 생성자 함수를 new 연산자 없이 호출`);
console.log(String(10));
console.log(String(NaN));
console.log(String(Infinity));
console.log(String(true));
console.log(String(false));

// 2. toString() 메소드 사용
console.log(``);
console.log(`2. toString() 메소드 사용`);
console.log((10).toString()); // 문자열 10 반환
console.log((NaN).toString());
console.log((Infinity).toString());
console.log((true).toString());
console.log((false).toString());

// 3. 문자열 연결 연산자 사용
console.log(``);
console.log(`3. 문자열 연결 연산자 사용`);
console.log(`앞에서 했기 때문에 pass`);