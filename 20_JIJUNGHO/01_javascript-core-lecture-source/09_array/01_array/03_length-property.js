// length property는 요소의 개수를 나타내고, 0 이상의 정수 값을 가진다.
console.log([].length); // 0

const arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5

// length property값은 배열에 요소를 추가하거나 삭제하면 자동으로 갱신된다.
arr.push(6);
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr.length); // 6

arr.pop();
console.log(arr); // [ 1, 2, 3, 4, 5 ]
console.log(arr.length); // 5

// length property에 임의의 값을 명시적으로 할당 할 수 있다.
arr.length = 3;
console.log(arr); // [ 1, 2, 3 ]
console.log(arr.length); // 3

arr.length = 10;
console.log(arr); // [ 1, 2, 3, <7 empty items> ]
console.log(arr.length); // 10
console.log(Object.getOwnPropertyDescriptors(arr));

// 자바스크립트는 배열의 요소가 연속적으로 위치하지 않고, 일부가 비어있는 "희소 배열"을 허용한다.
const sparse = [, 2, , 4];
console.log(sparse);
console.log(sparse.length); // 4 > 값은 없지만 자리수는 차지하고 있음

// key값 순회
for (let key in arr) {
  console.log(key);
}
