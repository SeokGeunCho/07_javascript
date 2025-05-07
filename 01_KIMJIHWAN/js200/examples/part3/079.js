// 배열 요소를 분할/변환하기(from)
// Array 내장객체의 메소드 from은 대입된 문자열 값을 구분자 없이 분할합니다.
// 그리고 분할된 문자는 배열 요소 각각에 대입되어, 결과값으로 배열을 반환합니다.

const str = '12345678';

const distributedArr = Array.from(str);
console.log(distributedArr);

const modifiedArr = Array.from(distributedArr, el => el * 2);
console.log(modifiedArr);

