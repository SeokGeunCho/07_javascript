// 배열(arr)의 요소 중 a와 b 사이에 속하지 않는 요소는 삭제해주는 함수 filterRange(arr, a, b)를 작성한다.

function filterRange(arr, a, b) {
  // 코드 작성
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
    }
  }
}

const arr = [5, 3, 8, 1, 10, 4];

filterRange(arr, 1, 5);

console.log(arr);
