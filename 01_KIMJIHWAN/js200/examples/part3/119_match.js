// 정규표현식으로 문자열 확인하기(match)

const str = 'To lose your path is the way to find that path';

// 문자열 'to'와 대소문자까지 완전히 일치하는 문자열
const sensitiveCaseRegex = /to/;
// 표현식에 i 플래그가 있으면 대수몬자 구분 없이 일치하는 'to'를 찾음
const ignoreAllCaseRegex = /to/gi;
// a-f까지 range 표현 방식
const findRangeRegex = /([a-f])\w+/i;
// 종합 : g플래그가 있기 때문에 정규표현식에 맞는 모든 단어 반환,
// i플래그가 있어 대소문자 구분 없이
// a부터 f까지 배열로 반환
const findAllRangeRegex = /([a-f])\w+/gi;

console.log(str.match(sensitiveCaseRegex));
console.log(str.match(ignoreAllCaseRegex));
console.log(str.match(findRangeRegex));
console.log(str.match(findAllRangeRegex));



