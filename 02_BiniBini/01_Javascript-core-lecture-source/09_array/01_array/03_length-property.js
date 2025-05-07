// 🔷 배열의 길이 (length)
// 👉 배열 안에 값이 몇 개 있는지 알려주는 숫자예요

console.log([].length); // ➜ 0 (아무것도 없으면 길이는 0)

const arr = [1, 2, 3, 4, 5];
console.log(arr.length); // ➜ 5 (값이 5개 있으니까 길이도 5)


// 🔷 push와 pop
// 👉 push: 끝에 넣기, pop: 끝에서 꺼내기

arr.push(6); // 6을 추가
console.log(arr);        // ➜ [1, 2, 3, 4, 5, 6]
console.log(arr.length); // ➜ 6 (하나 넣었으니 늘어남)

arr.pop(); // 마지막 6 꺼냄
console.log(arr);        // ➜ [1, 2, 3, 4, 5]
console.log(arr.length); // ➜ 5 (하나 꺼냈으니 줄어듦)


// 🔷 길이 직접 바꾸기
// 👉 줄이면 잘리고, 늘리면 빈칸이 생겨요

arr.length = 3;
console.log(arr);        // ➜ [1, 2, 3] (4, 5는 삭제됨)
console.log(arr.length); // ➜ 3

arr.length = 10;
console.log(arr);        // ➜ [1, 2, 3, <7 empty items>]
console.log(arr.length); // ➜ 10 (빈자리 포함해서 길이 계산됨)


// 🔷 배열 안 구조 보기
// 👉 배열도 사실은 객체예요. 내부 구조를 확인해볼 수 있어요.

console.log(Object.getOwnPropertyDescriptors(arr));
/*
0~2번 인덱스는 값이 있고,
3~9번은 값이 없고,
길이(length)는 10으로 표시돼요.
*/


// 🔷 빈칸 있는 배열 만들기 (희소 배열)
// 👉 중간중간 값이 없는 배열도 만들 수 있어요

const sparse = [, 2, , 4];
console.log(sparse);        // ➜ [ <1 empty>, 2, <1 empty>, 4 ]
console.log(sparse.length); // ➜ 4

console.log(Object.getOwnPropertyDescriptors(sparse));
/*
1번과 3번은 값이 있고,
0번과 2번은 진짜로 비어 있어요 (undefined도 아님!)
*/


// 🔷 for...in (번호 순회)
// 👉 배열의 "번호(키)"를 하나씩 꺼내요

for (let key in arr) {
  console.log(`key: ${key}, value: ${arr[key]}`);
}
/*
key: 0, value: 1
key: 1, value: 2
key: 2, value: 3
*/
// ⚠️ 배열에는 잘 안 써요. 순서가 뒤죽박죽 될 수도 있어서요.


// 🔷 for...of (값 순회)
// 👉 배열 안의 "진짜 값"을 하나씩 꺼내요

for (let value of arr) {
  console.log(`value: ${value}`);
}
/*
value: 1
value: 2
value: 3
*/
// ✅ 배열에서 반복할 때 for...of가 좋아요


// 🔷 간단하게 값 출력하기

for (let item of arr) {
  console.log(item);
}
// ➜ 1, 2, 3
