// 문자열 자르기 (substr)
// '문자열'.substr(시작 인덱스, 길이)
// 최신 JavaScript 표준에서는 사용을 피하는 것이 좋습니다. 대신 substring() 또는 slice() 메서드를 사용하는 것이 권장됩니다.
const sentence = 'Wakanda Forever!!!';
console.log(sentence.substr(8));
console.log(sentence.substr(8, 7));
console.log(sentence.substr(0));
console.log(sentence.substr(-10));
console.log(sentence.substr(0, -3));
console.log(sentence.substr(30));
console.log(sentence.substr(0, 30));



