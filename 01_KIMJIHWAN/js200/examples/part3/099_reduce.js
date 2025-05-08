// 배열 내 값을 누적시키기(reduce)
// 배열.reduce(누적된 값, 현재 요소 값, 현재 인덱스, 원본 배열) => {
//     return 누적값으로 반환되는 값
// }, 초기값);
const numArr = [1, 2, 3, 4, 5];

// reduce의 callback 함수 매개변수로, 첫 번째 acc(누적된 값)과 el(현재 요소값)을 정의합니다.
const result = numArr.reduce((acc, el) => {
    return acc + el;
}, 0);

console.log(result);
