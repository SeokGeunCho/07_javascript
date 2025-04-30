// 비교 연산자
// 동등 비교 (==, !=) : 암묵적 타입변환을 통해 타입 일치 시킨 후 같은 값인지 비교
// 일치비교 (===, !==) : 타입과 값이 모두 일치하는지 비교

// 숫자1, 문자 '1', 논리값 true 비교
console.log(`1 == '1' : ${1 == '1'}`);
console.log(`1 == true : ${1 == true}`);
console.log(`1 === '1' : ${1 === '1'}`);
console.log(`1 === true : ${1 === true}`);

// 숫자 0, 문자 '0', 논리값 false, 빈 문자열 '' 비교
console.log(`0 == '0' : ${0 == '0'}`);
console.log(`0 == 'false' : ${0 == 'false'}`);
console.log(`0 == '' : ${0 == ''}`);
console.log(`0 === '0' : ${0 == '0'}`);
console.log(`0 === 'false' : ${0 == 'false'}`);
console.log(`0 === '' : ${0 == ''}`);


// null 과 undefined 비교