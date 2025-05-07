// 문자열 자르기 (slice)
// 해당 인덱스 값 범위로 자르기 : 
// '문자열'.slice(시작 인덱스, 종료 인덱스)
const sentence = 'The sun will shine on us again';
console.log(sentence.slice(13));
console.log(sentence.slice(13, 24));
console.log(sentence.slice(0));
console.log(sentence.slice(0, -23));
// 음수도 가능, -23은 뒤에서부터 23번쨰 문자를 의미
console.log(sentence.slice(50));
console.log(sentence.slice(7, 2));





