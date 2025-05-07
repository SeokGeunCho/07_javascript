// 073. 두 개의 문자열 하나로 합치기(concat)
// 문자를 합칠 때는 맨 처음 놓일 변수를 기준으로 concat 메소드를 호출
// + 연산자가 concat보다 활용면에서 많이 사용됨 (성능도 빠름)
const str1 = 'Good afternoon';
const str2 = ', Good evening';
const str3 = ', and Good night!';
const str4 = ' - The Truman Show, 1998';
console.log(str1.concat(str2, str3, str4));

