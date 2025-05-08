// 정규표현식으로 문자열 변환하기(exec)
// RegExp 객체의 exec 메소드는 정규표현식과 일치하는 문자열을 찾아 배열로 반환
// 만일 일치하는 문자열이 없으면 null을 반환
const str = 'Java is not in Javascript';

const result1 = /java/ig.exec(str);
console.log(result1[0]);
console.log(result1.index);
console.log(result1.input);

const nums = '"1", "2", "3"';
const regex = /\d+/g;
while (result2 = regex.exec(nums)) {
    console.log(result2, regex.lastIndex);
}