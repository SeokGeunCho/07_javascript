// 01_variable
let name = prompt('이름을 입력하세요:');
let age = prompt('나이를 입력하세요:');
console.log(`${name}님의 나이는 ${age}세입니다.`);

// 02_operator
let num1 = Number(prompt('첫 번째 숫자:'));
let num2 = Number(prompt('두 번째 숫자:'));
console.log('덧셈:', num1 + num2);
console.log('뺄셈:', num1 - num2);
console.log('곱셈:', num1 * num2);
console.log('나눗셈:', num1 / num2);

// 03_object-literal
const book = {
    title: '자바스크립트 입문',
    author: '김지환',
    pages: 350
};
console.log(`${book.title} (${book.author}) - 총 ${book.pages}페이지`);

// 04_function
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(`${num}은 짝수입니다.`);
    } else {
        console.log(`${num}은 홀수입니다.`);
    }
}
checkEvenOdd(7);
checkEvenOdd(10);

// 05_scope
if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
    console.log(a); // 1
    console.log(b); // 2
    console.log(c); // 3
}
console.log(a); // 1 (var는 함수 스코프)
// console.log(b); // ReferenceError
// console.log(c); // ReferenceError

// 06_object-constructor-function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function() {
        console.log(`안녕하세요. 저는 ${this.name}이고 ${this.age}세입니다.`);
    };
}
const p1 = new Person('홍길동', 25);
p1.introduce();

// 07_prototype
function PersonProto(name, age) {
    this.name = name;
    this.age = age;
}
PersonProto.prototype.introduce = function() {
    console.log(`안녕하세요. 저는 ${this.name}이고 ${this.age}세입니다.`);
};
const p2 = new PersonProto('홍길동', 25);
p2.introduce();

// 08_strict-mode
'use strict';
// x = 10; // ReferenceError: x is not defined
// console.log(x);

// 09_array
// 답안 1
let arr = [1, 2, 3];
// 답안 2
arr.push(4);
console.log(arr); // [1, 2, 3, 4]
// 답안 3
console.log(arr[0]); // 1
