// 배열 생성

// 1. 리터럴로 생성
const arr = ["바나나", "복숭아", "키위"];
console.log(arr); // [ '바나나', '복숭아', '키위' ]

// 2. 배열 생성자 함수
const arr2 = new Array();
console.log(arr2); // []

const arr3 = new Array(10); // 생성할 방의 크기
console.log(arr3);

const arr4 = new Array(1, 2, 3);
console.log(arr4);

// 3. Array.of 메서드
// 전달 된 인수를 요소로 갖는 배열을 생성한다.
console.log(Array.of(10));
console.log(Array.of(1, 2, 3));

// 배열의 요소 접근
// 배열의 요소는 자신의 위치를 나타내는 인덱스를 가지며 배열의 요소에 접근할 때 사용한다.
console.log(arr[0]);
console.log(arr[1]);

// 배열의 요소의 개수 (배열의 길이)
console.log(arr.length);

// for문을 이용한 요소 순회
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 배열은 별도의 타입이 존재하지 않으면 "객체 타입"이다.
console.log(typeof arr); // object

const ojb = [];
console.log(ojb.length);
