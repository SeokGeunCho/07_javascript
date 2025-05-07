// 특정 문자열 위치 확인하기(lastIndexOf)
const str = 'Carpe diem, seize the day';

// String 객체의 lastIndexOf 메소드는 문자열의 뒤에서부터 동일한 첫 번째 인덱스 값을 반환
console.log(`"e"는 ${str.lastIndexOf('e')} 번째 인덱스에 있습니다.`);
console.log(`대문자 "C"는 ${str.lastIndexOf('C')} 번째 인덱스에 있습니다.`);
console.log(`소문자 "c"는 ${str.lastIndexOf('c')} 번쨰 인덱스에 있습니다.`);
console.log(`문자열 ", se"는 ${str.lastIndexOf(', se')} 번째 인덱스에 있습니다.`);




