// 배열 순환하기(forEach)
// Array 내장 객체의 forEach 메소드는 배열 내부 요소를 순환하며, 
// 각 요소에 대해 callback 함수를 실행
const arr = [
    {id: 0, name: '혜림', age: 6},
    {id: 1, name: '현일', age: 2},
    {id: 2, name: '현아', age: 5},
    {id: 3, name: '우림', age: 2}
];

arr.forEach((el) => {
    console.log(el.name);
});