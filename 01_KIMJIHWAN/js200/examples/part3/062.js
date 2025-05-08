// NDN 값 확인하기 (Number.isNaN)
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN('Is it Number?'));
console.log(Number.isNaN(0));
console.log(Number.isNaN(null));

// 음수는 숫자 자료형입니다. NaN이 아니기 때문에 false 결과를 반환
// 0을 0으로 나누는 것은 수학적으로 정의되지 않는 의미가 없는 연산
console.log(Number.isNaN(-1));
console.log(Number.isNaN(0/0));
console.log(Number.isNaN(new Date()));
// new Date()는 현재 시간을 Long 자료형으로 반환하지만,
// toString()을 통해 문자형으로 반환하면
// "Sat Sep 01 2018 14:53:26 GMT+0900 (KST)"와 같은 형태로 반환
console.log(Number.isNaN(new Date().toString));
console.log(Number.isNaN('Infinity'));

// 062-1 verifyNumber를 통해 NaN 여부를 검증
// 함수에 대입된 값이 빈 값이거나 NaN이면 산술처리 불가한 값으로 인식
// 이때 산술연산에서 에러가 발생하지 않도록, 0을 리텀하며 함수를 빠져나옴
function verifyNumber(n) {
    if (!n || Number.isNaN(n)) return 0;
    return n;
}
const num1 = verifyNumber(15); // 15
const num2 = verifyNumber(undefined); // 0
const num3 = verifyNumber(null); // 0
const num4 = verifyNumber(NaN); // 0
console.log(num1 + num2 + num3 + num4);








