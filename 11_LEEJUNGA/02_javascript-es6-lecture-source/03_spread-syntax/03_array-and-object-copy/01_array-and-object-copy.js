// 스프레드 문법의 활용 => 배열 또는 객체를 복사할 때 주로 사용한다.

const arr = [10, 20, 30];
const arrCopy = [...arr];
const arrCopy2 = arr; // 메모리 주소 복사
console.log(arr);
console.log(arrCopy);
console.log(arr === arrCopy);
console.log(arr === arrCopy2);

const obj = { name: "홍길동", age: 19 };
const objCopy = { ...obj, name: "유관순" };
console.log(obj);
console.log(objCopy);
console.log(obj === objCopy);
