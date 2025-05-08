// 함수의 매개변수가 많거나 기본값이 필요할 때 유용한 구조 분해 방식

function displayProduct(producer = "아무개", width = 0, height = 0, items = []) {
  console.log(producer);
  console.log(width);
  console.log(height);
  console.log(items);
}

// 인수 순서가 고정되므로 순서를 지켜야 하고,
// 기본값을 사용하려면 undefined를 명시적으로 넣어야 한다.
displayProduct("신사임당", undefined, undefined, ["Coffee", "Donut"]);

console.log("================================");

// 구조 분해 할당을 활용한 매개변수 방식
function displayProduct2({ producer = "아무개", width = 0, height = 0, items = [] }) {
  console.log(producer);
  console.log(width);
  console.log(height);
  console.log(items);
}

// 인수 순서를 신경 쓸 필요 없고,
// 일부 값만 넘겨도 나머지는 기본값이 적용된다.
const example = { producer: "홍길동", items: ["doll", "robot"] };
displayProduct2(example);

// displayProduct()	순서 중요, 기본값 활용 시 undefined를 직접 전달해야 함
// displayProduct2({})	순서 무관, 필요한 값만 넘겨도 됨, 가독성 ↑
