// 정규표현식으로 대응되는 문자열 위치 확인하기 (search)
// 정규표현식(Regular Expression)이란, 특정 규칙을 가진 문자열의 집합을 의미
// regxp 또는 regex라고 부름, 특수문자 /와 /를 사이에 두는 표현식을 통해 일치
// 하는 문자열을 찾거나 반환하고 또는 일괄 치환함
const str = 'To lose your path is the way to find that path';

const regex1 = /path/;
const regex2 = /q/;
const regex3 = /t/g;
const regex4 = /t/ig;

console.log(str.search(regex1));
console.log(str.search(regex2));
console.log(str.search(regex3));
console.log(str.search(regex4));




