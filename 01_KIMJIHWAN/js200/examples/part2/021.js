// 021.산술 등호 연산식 (Arithmetic Assignment Expressions)
// 산술 등호 연산식은 산술 연산자와 대입 연산자를 결합한 연산식입니다.
var x = 10;
x += 5;
x *= 2;
console.log(x);
var y = 10;
y -= 5;
y /= 5;
console.log(y);

// 021-1. 
console.log(15 % 4);    // 나머지 연산자 (Modulus Operator) - 15를 4로 나눈 나머지를 반환합니다.
console.log(3 ** 3);    // 거듭제곱 연산자 (Exponentiation Operator) - 3의 3제곱을 반환합니다.
console.log(+10);   // 단항 더하기 연산자 (Unary Plus Operator) - 숫자 10을 반환합니다.
console.log(-10);   // 단항 빼기 연산자 (Unary Minus Operator) - 숫자 10의 부호를 반전시킵니다.
var value = 10;     // 변수 value에 10을 할당합니다.
++value;    // value = value + 1; // 전위 증가 연산자 (Prefix Increment Operator) - value를 1 증가시킵니다.
--value;    // value = value - 1; // 전위 감소 연산자 (Prefix Decrement Operator) - value를 1 감소시킵니다.
console.log(value);