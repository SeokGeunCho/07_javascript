// 배열의 순서를 반대로 나열하기 (reverse)
const str = 'abcdefghijklmnopqrstuvwxyz';

// split 메소드를 활용하여 str 문자열을 배열로 변환
const arr = str.split('');
arr.reverse();

// 배열 arr이 구분자 없이 한 문자열로 병합
console.log(arr.join(''));

