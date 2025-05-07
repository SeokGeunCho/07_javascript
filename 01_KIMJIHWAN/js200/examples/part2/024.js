// 024. 삼항 연산자 (Ternary Operator)
// 삼항 연산자는 조건에 따라 두 가지 값 중 하나를 선택하는 연산자입니다.
// 조건 ? 참일 때의 값 : 거짓일 때의 값
// var age = 20;
// var isAdult = (age >= 18) ? "성인" : "미성년자"; // age가 18 이상이면 "성인", 아니면 "미성년자"를 반환합니다.

var condition = 5 < 10;
condition ? console.log('Left') : console.log('Right');
var result = condition ? (
    console.log("삼항 연산식의 첫 번째 표현식 입니다."),
    "표현식1"
) : (
    console.log("삼항 연산식의 두 번째 표현식 입니다."),
    "표현식2"
);
console.log(result);
