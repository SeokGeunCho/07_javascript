// 비교 연산자
// 동등비교 (==, !=) : 암묵적 타입변환을 통해 타입 일치 시킨 후 같은 값인지 비교
// 일치비교 (===, !==) : 타입과 값이 모두 일치하는 비교

// 숫자1, 문자'1', 논리값 true 비교
console.log(`1 == '1 : ${1 == "1"}`); // true
console.log(`1 == '1 : ${1 == true}`); // true
console.log(`1 == '1 : ${1 === "1"}`); // false
console.log(`1 == '1 : ${1 === true}`); // false

// 숫자 0, 문자 '0', 논리값 false, 빈문자열 ''비교
console.log(`0 == '0' : ${0 == "0"}`); // true
console.log(`0 == '0' : ${0 == "false"}`); // false
console.log(`0 == '0' : ${0 == ""}`); // true
console.log(`0 == '0' : ${0 === "0"}`); // false
console.log(`0 == '0' : ${0 === "false"}`); // false
console.log(`0 == '0' : ${0 === ""}`); // false

// null과 undefined비교
console.log(`null == undefined : ${null == undefined}`); //true => Falsy값으로 참이된다
console.log(`null == undefined : ${null === undefined}`); //false => Falsy값이여도, 타입이 달라서 거짓이된다.

// NaN은 자신과 일치하지 않는 유일한 값이다.
console.log(`NaN == NaN : ${NaN == NaN}`); // false
console.log(`NaN == NaN : ${NaN === NaN}`); // false
console.log(`Number.isNaN(NaN) : ${Number.isNaN(NaN)}`); // true

// 비교연산자를 통해 문자열끼리 비교도 가능하며 유니코드 순으로 비교한다.

// 일치비교 연산자
console.log(`'hello' === 'hello' : ${"hello" === "hello"}`); // true
console.log(`'hello' !== 'hello' : ${"hello" !== "hello"}`); // false

// 크기비교 연산자
console.log(`'apple' < 'banana' : ${"apple" < "banana"}`); // true
console.log(`'apple' > 'banana' : ${"apple" > "banana"}`); // false
