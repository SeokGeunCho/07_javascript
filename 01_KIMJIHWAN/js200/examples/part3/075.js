// 특정 문자열 위치 확인하기(indexOf)
// String 내장객체의 메소드 indexOf를 활용하면 문자열에서 특정 문자열이 있는지 확인 가능
const str = 'Carpe diem, seize the day';
console.log(`"e"는 ${str.indexOf('e')} 번째 인덱스에 있습니다.`);
console.log(`대문자 "C"는 ${str.indexOf('C')} 번째 인덱스에 있습니다.`);
console.log(`문자열 ", se"는 ${str.indexOf(', se')} 번째 인덱스에 있습니다.`);

//
const arr = ['Carpe', 'diem', 'seize', 'the', 'day'];
const howManyHasE = (arr) => {
    let count = 0;
    arr.forEach((str) => {
        if (str.indexOf('e') > -1) count++;
    });
    return count;
}

console.log((`${arr}에 "e"가 있는 요소는 모두 ${howManyHasE(arr)} 개 입니다.`));




