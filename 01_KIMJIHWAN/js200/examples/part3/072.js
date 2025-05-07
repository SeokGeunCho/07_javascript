// 문자열로 변환하기(toString)
// 모든 객체는 prototype을 통해 Object의 내장 메소드 toString()에 접근하고
// 재정의(Override)합니다.

const num = 5;
const bool = true;
const str = "문자열 값";
const arr = [1, 2, 3];
const obj = {a: 15};

console.log(num.toString());
console.log(bool.toString());
console.log(str.toString());
console.log(arr.toString());
console.log(obj.toString());

// 변수 중에서 num 변수의 __proto__를 통해 toString 메소드를 직접 재정의합니다.
// 새로 정의한 함수는 고정된 문자열 'toString 덮어쓰기'를 반환합니다.
num.__proto__.toString = () => {
    return 'toString 덮어쓰기';
};
console.log(num.toString());







